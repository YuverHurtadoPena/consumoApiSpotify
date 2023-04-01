import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreatePlayListComponent } from './form-create-play-list.component';

describe('FormCreatePlayListComponent', () => {
  let component: FormCreatePlayListComponent;
  let fixture: ComponentFixture<FormCreatePlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCreatePlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCreatePlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
