import { Component } from '@angular/core';

@Component({
  selector: 'app-linear-regression',
  templateUrl: './linear-regression.component.html',
  styleUrls: ['./linear-regression.component.css']
})
export class LinearRegressionComponent {

  // Función para calcular la suma de un array
  sum(arr: number[]): number {
    return arr.reduce((a, b) => a + b, 0);
  }

  // Función para calcular la suma de los productos de dos arrays
  sumXY(arr1: number[], arr2: number[]): number {
    return arr1.reduce((sum, x, idx) => sum + x * arr2[idx], 0);
  }

  // Función para realizar la regresión lineal
  linearRegression(x: number[], y: number[], value: number) {
    const n = x.length;
    const sumX = this.sum(x);
    const sumY = this.sum(y);
    const sumXY = this.sumXY(x, y);
    const sumX2 = this.sumXY(x, x);

    const b1 = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const b0 = (sumY - b1 * sumX) / n;

    const yk = b0 + b1 * value;

    return { b0, b1, yk };
  }

}
