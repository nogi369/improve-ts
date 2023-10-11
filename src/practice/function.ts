// 関数に対する型アノテーション

// function
function Bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(Bmi(1.78, 86));

export default Bmi;
