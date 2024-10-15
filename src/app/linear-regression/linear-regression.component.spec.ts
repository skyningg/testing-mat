import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearRegressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Linear Regression Calculations', () => {

    it('should calculate B0 for Data_Test1', () => {
      const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
      const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
      const result = component.linearRegression(proxySize, actualAdded, 386);

      expect(result.b0).toBeCloseTo(-22.55, 2);
    });

    it('should calculate B1 for Data_Test1', () => {
      const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
      const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
      const result = component.linearRegression(proxySize, actualAdded, 386);

      expect(result.b1).toBeCloseTo(1.7279, 4);
    });

    it('should calculate Yk for Data_Test1', () => {
      const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
      const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
      const result = component.linearRegression(proxySize, actualAdded, 386);

      expect(result.yk).toBeCloseTo(644.429, 3);
    });

    it('should calculate B0 for Data_Test2', () => {
      const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
      const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      const result = component.linearRegression(proxySize, actualDevelop, 386);

      expect(result.b0).toBeCloseTo(-4.039, 3);
    });

    it('should calculate B1 for Data_Test2', () => {
      const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
      const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      const result = component.linearRegression(proxySize, actualDevelop, 386);

      expect(result.b1).toBeCloseTo(0.1681, 4);
    });

    it('should calculate Yk for Data_Test2', () => {
      const proxySize = [130, 650, 99, 150, 128, 302, 95, 945, 368, 961];
      const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      const result = component.linearRegression(proxySize, actualDevelop, 386);

      expect(result.yk).toBeCloseTo(60.858, 3);
    });

    it('should calculate B0 for Data_Test3', () => {
      const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
      const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
      const result = component.linearRegression(planAdded, actualAdded, 386);

      expect(result.b0).toBeCloseTo(-23.92, 2);
    });

    it('should calculate B1 for Data_Test3', () => {
      const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
      const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
      const result = component.linearRegression(planAdded, actualAdded, 386);

      expect(result.b1).toBeCloseTo(1.43097, 5);
    });

    it('should calculate Yk for Data_Test3', () => {
      const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
      const actualAdded = [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601];
      const result = component.linearRegression(planAdded, actualAdded, 386);

      expect(result.yk).toBeCloseTo(528.4294, 4);
    });

    it('should calculate B0 for Data_Test4', () => {
      const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
      const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      const result = component.linearRegression(planAdded, actualDevelop, 386);

      expect(result.b0).toBeCloseTo(-4.604, 3);
    });

    it('should calculate B1 for Data_Test4', () => {
      const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
      const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      const result = component.linearRegression(planAdded, actualDevelop, 386);

      expect(result.b1).toBeCloseTo(0.14016, 5);
    });

    it('should calculate Yk for Data_Test4', () => {
      const planAdded = [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130];
      const actualDevelop = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
      const result = component.linearRegression(planAdded, actualDevelop, 386);

      expect(result.yk).toBeCloseTo(49.4994, 4);
    });

  });

});
