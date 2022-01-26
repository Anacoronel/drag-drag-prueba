import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEduComponent } from './form-edu.component';

describe('FormEduComponent', () => {
  let component: FormEduComponent;
  let fixture: ComponentFixture<FormEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
