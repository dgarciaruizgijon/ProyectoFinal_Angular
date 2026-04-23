import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoPeliculasComponent } from './grafico-peliculas.component';

describe('GraficoPeliculasComponent', () => {
  let component: GraficoPeliculasComponent;
  let fixture: ComponentFixture<GraficoPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoPeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
