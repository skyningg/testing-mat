export function sumX(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0);
}

export function sumYY(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val * val, 0);
}

export function sumXY(x: number[], y: number[]): number {
  return x.reduce((acc, val, index) => acc + val * y[index], 0);
}
