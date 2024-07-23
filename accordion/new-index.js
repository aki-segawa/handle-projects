const accordions = document.querySelectorAll('[data-accordion]') //取得した要素1つ1つに同じ挙動をさせる


// 子要素の高さを取得して、親要素の高さに加算する関数
const updateParentHeight = (acc) => {
  const content = acc.firstElementChild.nextElementSibling;//['data-accordion']の最初の子要素の次の要素を取得
  if (!content) return;
  let totalHeight = content.scrollHeight;
  const childAccordions = content.querySelectorAll('[data-accordion]')// 内部の子アコーディオンを全て取得
  console.log(childAccordions)
  childAccordions.forEach(childAcc => {
    console.log(childAcc)
    
    if(childAcc.classList.contains('active')) {
      console.log('アクティブです')
      console.log(totalHeight)
      console.log(childAcc.scrollHeight)
      totalHeight = childAcc.scrollHeight
      content.style.height = `${totalHeight}px`;
      
    } else {
      console.log(content.dataset.dataHeight)
      content.style.height = `${content.dataset.dataHeight}px`;
    }
  })
}



//forEachの形 関数の名前
const simpleAccordion = (acc) => {
  const btn = acc.firstElementChild; //最初の子要素を取得
  const content = btn.nextElementSibling //次の要素を取得する

  

  //クリックしたときの関数
  const onClick = () => {
    
    const isActive = acc.classList.contains('active')
    const update = acc.classList.contains('active')
    if (isActive) {
      acc.classList.remove('active');
      content.style.height = '0';
      content.style.overflow = 'hidden';
    } else {
      acc.classList.add('active');
      const height = content.scrollHeight;
      content.dataset.dataHeight = height;
      content.style.height = height + 'px';
      content.style.overflow = 'visible';
    }

    const parentAcc = acc.parentElement.closest('[data-accordion]');
    if (parentAcc) {//[data-accordion]の親の祖先に[data-accordion]があったら
      updateParentHeight(parentAcc);
    }
  }

  //クリックしたときの形 → クリックしたときの関数　へ
  // btn.addEventListener('click',() => {})
  btn.addEventListener('click', onClick);
}
//forEachの形
// accordions.forEach(acc => 関数の名前)
accordions.forEach(acc => simpleAccordion(acc));








//activeクラスを追加する関数
// const toggleClass = (target) => {
//   target.classList.toggle('active')
// }


