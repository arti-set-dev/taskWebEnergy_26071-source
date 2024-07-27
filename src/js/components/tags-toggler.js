import vars from "../_vars.js";

document.addEventListener('DOMContentLoaded', () => {
  vars.tagBtnEl?.addEventListener('click', () => {
    const productsTags = document.querySelector('.tags');

    productsTags.classList.toggle('tags--show');

    if (productsTags?.classList.contains('tags--show')) {
      vars.tagBtnEl.textContent = 'Свернуть';
    } else {
      vars.tagBtnEl.textContent = 'Показать еще';
    }
  })
})
