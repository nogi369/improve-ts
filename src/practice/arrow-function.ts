export const Bmi3 = (height: number, weight: number): number =>
  weight / (height * height);

console.log(Bmi3(1.78, 86));

// function
// function Bmi(height: number, weight: number): number {
//   return weight / (height * height);
// }
