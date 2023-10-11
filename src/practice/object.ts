// 通常のオブジェクト定義
let profile1: object = { name: "Ham" };
profile1 = { birthYear: 1976 };

// {}を使う方法
// => プロパティの更新ができる

// const profile2: {} = { name: "Ham" };
let Profile2: {
  name: string;
} = { name: "Ham" };
Profile2 = { name: "Nimo" };

console.log(Profile2);

export default Profile2;

// profile2 = { birthYear: 1976 };
