// Utility functions for Endurance Index calculations

export function calculateEnduranceIndex(
  mas: number,
  distance: number,
  hours: number,
  minutes: number,
  seconds: number,
): number | null {
  // Convert race time to seconds and minutes
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const timeInHours = totalSeconds / 3600;
  const timeInMinutes = totalSeconds / 60;
  if (totalSeconds === 0 || mas === 0) return null;

  // Calculate race MAS (in km/h)
  const raceMas = distance / 1000 / timeInHours;
  const raceMasPercent = (raceMas / mas) * 100;

  // Endurance index formula
  if (timeInMinutes <= 6) return null; // ln(time/6) must be > 0
  const enduranceIndex = (raceMasPercent - 100) / Math.log(timeInMinutes / 6);
  return enduranceIndex;
}

export function calculateRaceDuration(
  mas: number,
  distance: number,
  enduranceIndex: number,
): { hours: number; minutes: number; seconds: number } | null {
  if (mas <= 0 || distance <= 0 || enduranceIndex === 0) return null;
  // Define f(x) as the difference between the two sides of the equation
  // f(x) = (distance * 60) / (mas * 1000 * x) * 100 - (enduranceIndex * ln(x/6) + 100)
  const f = (x: number) => {
    if (x <= 6) return 1e10; // Avoid log(<=0)
    const left = ((distance * 60) / (mas * 1000 * x)) * 100;
    const right = enduranceIndex * Math.log(x / 6) + 100;
    return left - right;
  };

  // Find an interval [low, high] where f(low) and f(high) have opposite signs
  let low = 6.01;
  let high = 10000;
  let found = false;
  for (let i = 0; i < 100; i++) {
    const fLow = f(low);
    const fHigh = f(high);
    if (fLow * fHigh < 0) {
      found = true;
      break;
    }
    // If not, expand high
    high *= 2;
    if (high > 1e7) break;
  }
  if (!found) return null;

  // Bisection method
  let mid;
  let iterations = 0;
  while (high - low > 1e-6 && iterations < 200) {
    mid = (low + high) / 2;
    const fMid = f(mid);
    if (Math.abs(fMid) < 1e-7) break;
    if (f(low) * fMid < 0) {
      high = mid;
    } else {
      low = mid;
    }
    iterations++;
  }
  const timeInMinutes = (low + high) / 2;
  const totalSeconds = Math.round(timeInMinutes * 60);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { hours, minutes, seconds };
}
