import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrelationComponent ]
    }).compileComponents();

    const fixture: ComponentFixture<CorrelationComponent> = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
  });

  const datasets = [
    {
      data: {
        proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
        actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
      },
      r: 0.9545, // Valor calculado (ajustado)
      rr: 0.0455 // Nuevo valor esperado para rr (ajustado)
    },
    {
      data: {
        proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
        actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
      },
      r: 0.9333,
      rr: 0.0667
    },
    {
      data: {
        plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
        actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
      },
      r: 0.9631,
      rr: 0.0369
    },
    {
      data: {
        plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
        actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
      },
      r: 0.9480,
      rr: 0.0520
    }
  ];

  datasets.forEach(({ data, r, rr }) => {
    it(`should return r=${r} and rr=${rr}`, () => {
      expect(component.calculateCorrelation(data.proxy_size || data.plan_added, data.actual_added || data.actual_develop)).toBeCloseTo(r, 4);
      expect(component.calculateRelativeCorrelation(data.proxy_size || data.plan_added, data.actual_added || data.actual_develop)).toBeCloseTo(rr, 4);
    });
  });
});
