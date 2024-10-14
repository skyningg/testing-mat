import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StddevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate stddev of the first dataset', () => {
	  const data = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
	  const result = component.calculateStdDev(data);
	  expect(result).toBeCloseTo(542.67, 2);
  });

  it('should calculate stddev of the second dataset', () => {
	  const data = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
	  const result = component.calculateStdDev(data);
	  expect(result).toBeCloseTo(59.06, 2);

  });

});
