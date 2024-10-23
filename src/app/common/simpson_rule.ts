// Simpson's Rule Integration with adaptive segmentation
export function simpson(f: Function, x0: number, x1: number, num_seg: number, error: number): number {
    let numSeg = num_seg;
    let w = (x1 - x0) / numSeg; // segment width
    let result = integrate(f, x0, x1, numSeg);
    let newResult;

    do {
        numSeg *= 2; // Double the number of segments
        newResult = integrate(f, x0, x1, numSeg);
        if (Math.abs(newResult - result) < error) break;
        result = newResult;
    } while (true);

    return newResult;
}

// Function to perform the actual integration using Simpson's rule
function integrate(f: Function, x0: number, x1: number, numSeg: number): number {
    const w = (x1 - x0) / numSeg; // Segment width
    let sum = f(x0) + f(x1);

    // Apply Simpson's rule: 1/3 rule
    for (let i = 1; i < numSeg; i++) {
        const xi = x0 + i * w;
        sum += (i % 2 === 0 ? 2 : 4) * f(xi);
    }

    return (w / 3) * sum;
}

// Helper function to calculate Gamma approximation for small values
function gamma(n: number): number {
    // Lanczos approximation for Gamma function
    const p = [
        676.5203681218851, -1259.1392167224028, 771.32342877765313,
        -176.61502916214059, 12.507343278686905, -0.13857109526572012,
        9.9843695780195716e-6, 1.5056327351493116e-7
    ];

    let x = p[0];
    for (let i = 1; i < p.length; i++) {
        x += p[i] / (n + i);
    }

    const t = n + p.length - 0.5;
    return Math.sqrt(2 * Math.PI) * Math.pow(t, n - 0.5) * Math.exp(-t) * x;
}

// Function for t-distribution
export function tDistribution(x: number, dof: number): number {
    if (dof <= 0) return 0; // Prevent invalid degrees of freedom
    const gammaNumerator = gamma((dof + 1) / 2);
    const gammaDenominator = Math.sqrt(dof * Math.PI) * gamma(dof / 2);
    const multiplier = Math.pow(1 + (x * x) / dof, -(dof + 1) / 2);
    return (gammaNumerator / gammaDenominator) * multiplier;
}


// Correct functions for t-distribution with specific degrees of freedom
export function f1(x: number): number {
    return 2 * x;
}

export function f2(x: number): number {
    return x * x;
}

export function f3(x: number): number {
    return 1 / x;
}

// Updated t-distribution functions with the correct formula
export function f4(x: number): number {
    return tDistribution(x, 9); // 9 degrees of freedom
}

export function f5(x: number): number {
    return tDistribution(x, 10); // 10 degrees of freedom
}

export function f6(x: number): number {
    return tDistribution(x, 30); // 30 degrees of freedom
}

