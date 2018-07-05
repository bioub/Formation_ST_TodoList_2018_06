import { append, prepend, remove } from './dom';
import 'core-js/fn/array/from';
import axios from 'axios';

/**
 * @param {object} todo La todo
 * @param {string} todo.title Le titre
 * @param {boolean} todo.completed Le status
 */
function addTodo(todo) {
  const value = todo.title;
  const checked = todo.completed;

  const rowElt = document.createElement('div');

  const checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.checked = checked;
  append(rowElt, checkboxElt); // <div><input type="checkbox"></div>

  const rowInputElt = document.createElement('input');
  rowInputElt.value = value;
  append(rowElt, rowInputElt); // <div><input type="checkbox"><input value="todo"></div>

  const buttonRemoveElt = document.createElement('button');
  buttonRemoveElt.innerText = '-';
  append(rowElt, buttonRemoveElt); // <div><input type="checkbox"><input value="todo"><button>-</button></div>

  buttonRemoveElt.addEventListener('click', (event) => {
    remove(event.target.parentElement);
    //
  });

  prepend(divElt, rowElt);
}

/** @type HTMLFormElement */
const formElt = document.querySelector('.todo-form');

/** @type HTMLInputElement */
const inputElt = document.querySelector('.todo-input');

/** @type HTMLDivElement */
const divElt = document.querySelector('.todo-div');

/** @type HTMLInputElement */
const checkElt = document.querySelector('.todo-check');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo({
    title: inputElt.value,
    completed: false,
  });
  //
});

checkElt.addEventListener('change', () => {
  const checkboxesNodeList = divElt.querySelectorAll('input[type=checkbox]');

  const checkboxes = Array.from(checkboxesNodeList);
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checkElt.checked;
  });

  // import asynchrone qui sera buildé dans un second
  // fichier chargé au moment du clic
  /*
  import('./debug').then(({ debug }) => {
    debug('checkbox change');
  });
  */
});

axios.get('http://localhost:8080/api/todos').then(({ data }) => {
  data.slice(0, 10).forEach((todo) => {
    addTodo(todo);
  });
});
