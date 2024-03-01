const categorySection = document.querySelector('.category-section');
const cardList = document.querySelector('.card-list');

let categories = data.map((item) => item.category);
categories = new Set(categories);

function showCategories() {
  categories.forEach((category) => {
    let categoryHtml = `
      <button class="btn category ${category.toLowerCase()}" aria-label="Select category">${category}</button>
    `;
    categorySection.innerHTML += categoryHtml;
  });

  const categoryButtons = document.querySelectorAll('.category');

  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let categoryName = e.target.textContent.toLowerCase();
      cardList.innerHTML = '';
      showCards(categoryName);
    });
  });
}

function showCards(category) {
  let cards = data.filter((item) => item.category.toLowerCase() === category);

  cards.forEach((card) => {
    let notesHtml = ``;

    card.back.forEach((note) => {
      notesHtml += `<li class="card__note">${note}</li>`;
    });

    let cardHtml = `
      <li class="card-wrapper">
        <button class="btn card front ${category}" aria-label="Show notes">
          <h2 class="card__title">${card.front}</h2>
        </button>
        <button class="btn card back ${category}" aria-label="Show card title" aria-hidden="true" tabIndex="-1">
          <h2 class="card__title">${card.front}</h2>
          <ul class="card__notes">${notesHtml}
          </ul>
        </button>
      </li>
    `;

    cardList.innerHTML += cardHtml;
  });

  const cardWrappers = document.querySelectorAll('.card-wrapper');

  cardWrappers.forEach((wrapper) => {
    let finalHeight = wrapper.lastElementChild.scrollHeight;

    wrapper.style.height = finalHeight + 16 + 'px';

    wrapper.addEventListener('click', toggleRotate);

    function toggleRotate(e) {
      let children = e.currentTarget.children;

      for (let child of children) {
        child.classList.toggle('rotate');

        if (child.hasAttribute('tabIndex')) {
          child.removeAttribute('tabIndex');
          child.removeAttribute('aria-hidden');
          child.focus();
        } else {
          child.setAttribute('tabIndex', '-1');
          child.setAttribute('aria-hidden', 'true');
        }
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  showCategories();
});
