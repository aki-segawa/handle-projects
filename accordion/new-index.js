const accordions = document.querySelectorAll('[data-accordion]') //取得した要素1つ1つに同じ挙動をさせる

//forEachの形 関数の名前
const simpleAccordion = (acc) => {
  const btn = acc.firstElementChild; //最初の子要素を取得
  const content = btn.nextElementSibling //次の要素を取得する

    //クリックしたときの関数
  const onClick = () => {
    const isActive = acc.classList.contains('active');

    if (isActive) {
      content.style.height = content.scrollHeight + 'px';

      requestAnimationFrame(() => {
        acc.classList.remove('active');
        content.style.height = '0';
      })
    } else {
      const height = content.scrollHeight;
      content.dataset.dataHeight = height;
      content.style.height = height + 'px';
      acc.classList.add('active');
    }
  }

  const onTransitionend = () => {
    content.style.height = '';
  }

  //クリックしたときの形 → クリックしたときの関数　へ
  // btn.addEventListener('click',() => {})
  btn.addEventListener('click', onClick);
  content.addEventListener('transitionend', onTransitionend);
}
//forEachの形
// accordions.forEach(acc => 関数の名前)
accordions.forEach(acc => simpleAccordion(acc));

// フルーツの配列
const fruits = ['apple', 'banana', 'grape', 'orange', 'peach'];
// フルーツの配列をループで出力
fruits.forEach(fruit => {
  console.log(fruit);
});








//activeクラスを追加する関数
// const toggleClass = (target) => {
//   target.classList.toggle('active')
// }
// トランジションを遅延させる為に書いたコード
// setTimeout(() => {
//   acc.classList.remove('active');
//   content.style.height = '0';
// });



