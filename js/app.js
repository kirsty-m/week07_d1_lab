document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


const form = document.querySelector('#new-item-form');
const formHandler = (event) => {
  event.preventDefault();
  console.log(event.target.title.value);
}
form.addEventListener('submit', formHandler);

})