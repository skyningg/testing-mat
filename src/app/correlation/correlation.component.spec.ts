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

  it('should return the correct r value for dataset 1', () => {
    const data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
    const expectedR = 0.9545;
    expect(component.calculateCorrelation(data.proxy_size, data.actual_added)).toBeCloseTo(expectedR, 4);
  });

  it('should return the correct rr value for dataset 1', () => {
    const data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
    const expectedRR = 0.0455;
    expect(component.calculateRelativeCorrelation(data.proxy_size, data.actual_added)).toBeCloseTo(expectedRR, 4);
  });

  it('should return the correct r value for dataset 2', () => {
    const data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
    const expectedR = 0.9333;
    expect(component.calculateCorrelation(data.proxy_size, data.actual_develop)).toBeCloseTo(expectedR, 4);
  });

  it('should return the correct rr value for dataset 2', () => {
    const data = {
      proxy_size: [130, 650, 99, 150, 128, 302, 95, 945, 368, 961],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
    const expectedRR = 0.0667;
    expect(component.calculateRelativeCorrelation(data.proxy_size, data.actual_develop)).toBeCloseTo(expectedRR, 4);
  });

  it('should return the correct r value for dataset 3', () => {
    const data = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
    const expectedR = 0.9631;
    expect(component.calculateCorrelation(data.plan_added, data.actual_added)).toBeCloseTo(expectedR, 4);
  });

  it('should return the correct rr value for dataset 3', () => {
    const data = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_added: [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]
    };
    const expectedRR = 0.0369;
    expect(component.calculateRelativeCorrelation(data.plan_added, data.actual_added)).toBeCloseTo(expectedRR, 4);
  });

  it('should return the correct r value for dataset 4', () => {
    const data = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
    const expectedR = 0.9480;
    expect(component.calculateCorrelation(data.plan_added, data.actual_develop)).toBeCloseTo(expectedR, 4);
  });

  it('should return the correct rr value for dataset 4', () => {
    const data = {
      plan_added: [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130],
      actual_develop: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
    };
    const expectedRR = 0.0520;
    expect(component.calculateRelativeCorrelation(data.plan_added, data.actual_develop)).toBeCloseTo(expectedRR, 4);
  });
});
