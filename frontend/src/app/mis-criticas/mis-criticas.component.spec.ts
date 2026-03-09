import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisCriticasComponent } from './mis-criticas.component';

describe('MisCriticasComponent', () => {
  let component: MisCriticasComponent;
  let fixture: ComponentFixture<MisCriticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisCriticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisCriticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
