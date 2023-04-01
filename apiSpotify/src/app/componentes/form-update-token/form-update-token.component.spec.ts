import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateTokenComponent } from './form-update-token.component';

describe('FormUpdateTokenComponent', () => {
  let component: FormUpdateTokenComponent;
  let fixture: ComponentFixture<FormUpdateTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdateTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
