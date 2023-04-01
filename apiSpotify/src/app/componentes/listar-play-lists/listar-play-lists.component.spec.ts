import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlayListsComponent } from './listar-play-lists.component';

describe('ListarPlayListsComponent', () => {
  let component: ListarPlayListsComponent;
  let fixture: ComponentFixture<ListarPlayListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPlayListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPlayListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
