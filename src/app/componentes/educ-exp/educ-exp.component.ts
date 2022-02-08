import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Edu } from '../../models/Edu';
import { Exp } from '../../models/Exp';
import { PortfolioService } from './../../servicios/portfolio.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-educ-exp',
  templateUrl: './educ-exp.component.html',
  styleUrls: ['./educ-exp.component.css'],
})
export class EducExpComponent implements OnInit {
  @Input() edu: Edu[] = [];
  @Output() onAddEdu: EventEmitter<Edu> = new EventEmitter();
  @Output() onDeleteEdu: EventEmitter<Edu> = new EventEmitter();
  @Output() onEditEdu: EventEmitter<Edu> = new EventEmitter();

  @Input() exp: Exp[] = [];
  @Output() onAddExp: EventEmitter<Exp> = new EventEmitter();
  @Output() onDeleteExp: EventEmitter<Exp> = new EventEmitter();
  @Output() onEditExp: EventEmitter<Exp> = new EventEmitter();

  id: any;
  institucion: string = '';
  fecha: string = '';
  link: string = '';
  titulo: string = '';
  empresa: string = ';';
  puesto: string = '';
  fechaHasta: string = '';
  persona_id: any;
  modalRef?: BsModalRef;

  subscription?: Subscription;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    institucion: new FormControl(''),
    fecha: new FormControl(''),
    link: new FormControl(''),
    titulo: new FormControl(''),
    fechaHasta: new FormControl(''),
    empresa: new FormControl(''),
    puesto: new FormControl(''),
    persona_id: new FormControl(''),
  });

  constructor(
    private portfolioService: PortfolioService,
    private FormBuilder: FormBuilder,
    private modalService: BsModalService
  ) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal1(template1: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template1);
  }
  openModal2(templateed: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateed);
  }
  penModaexp(templateexp: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateexp);
  }

  ngOnInit(): void {
    this.portfolioService.obtenerEdu().subscribe((edu) => {
      console.log(edu);
      this.edu = edu;
    });
    this.portfolioService.getEdu(this.id).subscribe((edu) => {
      console.log(edu);
      this.id = edu.id;
    });
    this.portfolioService.obtenerExp().subscribe((exp) => {
      console.log(exp);
      this.exp = exp;
    });
    this.portfolioService.getExp(this.id).subscribe((exp) => {
      console.log(exp);
      this.id = exp.id;
    });
  }

  deleteEdu(edu: Edu) {
    console.log(edu.id);
    this.edu = this.edu.filter((e) => e !== edu);
    this.portfolioService.deleteEdu(edu).subscribe();
    this.modalService.hide();
  }

  agregarEdu() {
    console.log('submitedu', this.edu);
    const { id, institucion, fecha, link, titulo, persona_id } = this;
    const newEdu = { id, institucion, fecha, link, titulo, persona_id };

    this.onAddEdu.emit(newEdu);
    this.portfolioService.addEdu(newEdu).subscribe((dato) => {
      console.log(dato);
    });
    this.modalService.hide();

    this.portfolioService.obtenerEdu();
  }

  editarEdu(edu: Edu) {
    console.log('edit ' + edu.id);

    this.id = edu.id;
    this.institucion = edu.institucion;
    this.fecha = edu.fecha;
    this.titulo = edu.titulo;
    this.link = edu.link;
    this.persona_id = edu.persona_id;

    this.onEditEdu.emit(edu);
    this.portfolioService.editEdu(edu).subscribe((edu) => {});
    this.modalService.hide();

    this.portfolioService.obtenerEdu();
  }

  editarExp(exp: Exp) {
    console.log('edit ' + exp.id);

    this.id = exp.id;
    this.empresa = exp.empresa;
    this.fecha = exp.fecha;
    this.fechaHasta = exp.fechaHasta;
    this.puesto = exp.puesto;
    this.link = exp.link;
    this.persona_id = exp.persona_id;

    this.onEditExp.emit(exp);
    this.portfolioService.editExp(exp).subscribe((exp) => {});
    this.modalService.hide();

    this.portfolioService.obtenerExp();
  }

  deleteExp(exp: Exp) {
    console.log(exp.id);
    this.exp = this.exp.filter((e) => e !== exp);
    this.portfolioService.deleteExp(exp).subscribe();
    this.modalService.hide();
  }

  agregarExp() {
    console.log('submitexp', this.exp);
    const { id, empresa, fecha, fechaHasta, link, puesto, persona_id } = this;
    const newExp = { id, empresa, fecha, fechaHasta, link, puesto, persona_id };

    this.onAddExp.emit(newExp);
    this.portfolioService.addExp(newExp).subscribe((dato) => {
      console.log(dato);
    });
    this.portfolioService.obtenerExp();
    this.modalService.hide();
  }
}
