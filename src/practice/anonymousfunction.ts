// 関数に対する型アノテーション

// anonymousfunction
// 変数に関数を代入する
const Bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
) {
  // const Bmi2 = function (height: number, weight: number) {
  return weight / (height * height);
};

console.log(Bmi2(1.78, 86));

export default Bmi2;

// function
// function Bmi(height: number, weight: number): number {
//   return weight / (height * height);
// }
