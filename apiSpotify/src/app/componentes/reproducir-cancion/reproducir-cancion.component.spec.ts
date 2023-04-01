import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproducirCancionComponent } from './reproducir-cancion.component';

describe('ReproducirCancionComponent', () => {
  let component: ReproducirCancionComponent;
  let fixture: ComponentFixture<ReproducirCancionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReproducirCancionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReproducirCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
