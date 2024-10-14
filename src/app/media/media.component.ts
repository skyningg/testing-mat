import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  calculateMedia(numbers: number[]): number {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return parseFloat((total / numbers.length).toFixed(2)); // Redondea a 2 decimales
  }
}
