export class Edu {
    id: any;
    institucion: string="";
    link: string="";
    fecha: string="";
    titulo: string="";
    persona:{ id:any};
    constructor(id:any, institucion:any, link:string, fecha:string, titulo:string, persona:{id:any}){

        this.id=id;
        this.institucion=institucion;
        this.link=link;
        this.fecha=fecha;
        this.titulo=titulo;
        this.persona=persona;
    }
    }

    


