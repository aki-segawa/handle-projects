function simpleAccordion(wrapper) {
  const btn = wrapper.firstElementChild;
  const content = btn.nextElementSibling;

  
  const onClick = () => {
    const isActive = content.classList.contains('active')
    if(isActive) {
      content.style.height = '0';
    } else {
      content.style.height = '0';
      const height = content.scrollHeight;
      content.style.height = height + 'px';
    }
    toggleClass(wrapper);

  };

  btn.addEventListener('click', onClick);
}
const accordions = document.querySelectorAll('[data-accordion]');
accordions.forEach(acc => simpleAccordion(acc));

function toggleClass(target) {
  target.classList.toggle('active')
}




















// forEachの長い場合
// accordions.forEach((accordion) => {
//   simpleAccordion(accordion);
// });

