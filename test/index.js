// 変数
let unko = 'Hello World!';

// 定数
const bigUnko = 'He..Hell...Hello World!';

// 配列
let inoki = ['いーち','にーい','さーん','だーーー！'];

// ループ文
// let index = 0;
// while(index < inoki.length){
//   // 繰り返したい処理
//   console.log(inoki[index]);
//   index++;
// }

// if else文
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...！');
// }

// 関数
// const test = (arg) => {
//   if(inoki.length > arg){
//     console.log('ボンバイエ！');
//   } else {
//     console.log('ボンバ...！');
//   }
// };
// test(3);

// オブジェクト
// const unko2 = {
//   color: 'pink',
//   size: 'large',
//   purfume: 'mint',
//   goToilet: () => {
//     console.log('Hello World.');
//   }
// };
// console.log(unko2.goToilet());

// 特殊なオブジェクト
// window
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// window.alert('Hello World!')

// document
// console.log(document.getElementsByTagName('button'));
// console.log(document.getElementsByTagName('button')[0]);

// event
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  //命令を書く
  window.alert('Hello World!');
})


