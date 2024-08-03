const wrapper = document.querySelector('[data-accordion]');
const btn = document.querySelector('[data-btn]')
const content = document.querySelector('[data-content]')
const wrapper2 = document.querySelector('[data-accordion2]');
const btn2 = document.querySelector('[data-btn2]')
const content2 = document.querySelector('[data-content2]')
const wrapper3 = document.querySelector('[data-accordion3]');
const btn3 = document.querySelector('[data-btn3]')
const content3 = document.querySelector('[data-content3]')
const content3Btn = document.querySelector('[data-content3-btn]')
const content3Child = document.querySelector('[data-content3-child]')

function toggleClass(target) {
  target.classList.toggle('active')
}

function clickEvent( btn, content) {
  btn.addEventListener('click', () => {
    toggleClass(content)
    const isActive = content.classList.contains('active')
    console.log(isActive)
    if(isActive) {
      content.style.height = '0';
      console.log(content.scrollHeight);//プロパティ
      const height = content.scrollHeight;
      content.style.height = height + 'px';
      content.dataset.height = height
    } else {
        content.style.height = '0';
    }
  });
}


content3Btn.addEventListener('click', () => {
  clickEvent( content3Btn, content3Child)
  const isActiveContent = content3.classList.contains('active')
  if(isActiveContent) {
    content3.style.height = 'auto';
    content3Child.classList.add('active')
    const heightChild = content3Child.scrollHeight;
    content3Child.style.height = heightChild + 'px';
  } else {
    content3.style.height = content3.dataset.height + 'px';
    content3Child.classList.remove('active')
    content3Child.style.height = '0';
    content3Child.ontransitionend = (event) => {
      console.log('テキスト3もこどもを閉じました')
      console.log(event)
      content3.style.height = content3.dataset.height + 'px';
    }
  }



  // const isActiveChild = content3Child.classList.contains('active')
  // if (!isActiveChild) {
  // } else {
  //   };
})

btn3.addEventListener('click', () => {
  const isActiveContent = content3.classList.contains('active')
  const isActiveChild = content3Child.classList.contains('active')
  if (isActiveContent && isActiveChild) {
    content3.classList.remove('active')
    content3Child.classList.remove('active')
    content3.style.height = '0';
    content3Child.style.height = '0';
    content3Child.ontransitionend = (event) => {
      console.log('テキスト3もこどもを閉じました')
    }
  }
})


clickEvent( btn2, content2)
clickEvent( btn3, content3)
// clickEvent( content3Btn, content3Child)
