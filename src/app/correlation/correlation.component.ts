import { Component } from '@angular/core';

@Component({
  selector: 'app-correlation',
  templateUrl: './correlation.component.html',
  styleUrls: ['./correlation.component.css']
})
export class CorrelationComponent {

  calculateCorrelation(x: number[], y: number[]): number {
    const n = x.length;
    const sumX = this.sum(x);
    const sumY = this.sum(y);
    const sumXY = this.sumXY(x, y);
    const sumXX = this.sumYY(x);
    const sumYY = this.sumYY(y);
    
    return (n * sumXY - sumX * sumY) / Math.sqrt((n * sumXX - sumX * sumX) * (n * sumYY - sumY * sumY));
  }

  calculateRelativeCorrelation(x: number[], y: number[]): number {
    return 1 - this.calculateCorrelation(x, y); // Ejemplo simple
  }

  sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  sumYY(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val * val, 0);
  }

  sumXY(x: number[], y: number[]): number {
    return x.reduce((acc, val, index) => acc + val * y[index], 0);
  }
}
