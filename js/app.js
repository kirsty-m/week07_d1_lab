document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const form = document.querySelector('#new-item-form');
const formHandler = (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  console.log(title, author, category);

    

    const ul = document.querySelector('ul#reading-list');

    const li = document.createElement('li');
    ul.appendChild(li);

    const div = document.createElement('div');
    li.appendChild(div);

    const h1 = document.createElement('h1');
    h1.textContent = title;
    div.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = author;
    div.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = category;
    div.appendChild(p);

};
form.addEventListener('submit', formHandler);

const delButton = document.createElement('')

});