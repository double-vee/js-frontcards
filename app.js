const categorySection = document.querySelector('.category-section');
const cardList = document.querySelector('.card-list');

const categories = data.map((category) => category.name);

function showCategories() {
  categories.forEach((category) => {
    let categoryHtml = `
      <button class="btn category ${category.toLowerCase()}">${category}</button>
    `;
    categorySection.innerHTML += categoryHtml;
  });

  const categoryButtons = document.querySelectorAll('.category');

  categoryButtons.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
      let categoryName = e.target.textContent.toLowerCase();
      cardList.innerHTML = '';
      showCards(i, categoryName);
    });
  });
}

function showCards(i, category) {
  let cards = data[i].cards;

  cards.forEach((card) => {
    let notesHtml = ``;

    card.back.forEach((note) => {
      notesHtml += `<li class="card__note">${note}</li>`;
    });

    let cardHtml = `
      <li class="card-wrapper">
        <button class="btn card front ${category}">
          <h2 class="card__title">${card.front}</h2>
        </button>
        <button class="btn card back ${category}">
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
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  showCategories();
});
