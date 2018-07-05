import { append, prepend, remove } from './dom';
import { getListFromApi, addToApi, removeFromApi, updateApi } from './service';
import 'core-js/fn/array/from';

/**
 * @param {object} todo La todo
 * @param {string} todo.title Le titre
 * @param {boolean} todo.completed Le status
 */
function addTodo(todo) {
  const value = todo.title;
  const checked = todo.completed;

  const rowElt = document.createElement('div');
  rowElt.dataset.todoId = todo._id;

  const checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.checked = checked;
  append(rowElt, checkboxElt); // <div><input type="checkbox"></div>

  checkboxElt.addEventListener('click', () => {
    updateApi({
      _id: todo._id,
      completed: checkboxElt.checked,
    }).then((todoFromApi) => {
      console.log('updated', todoFromApi);
    });
  });

  const rowInputElt = document.createElement('input');
  rowInputElt.value = value;
  append(rowElt, rowInputElt); // <div><input type="checkbox"><input value="todo"></div>

  rowInputElt.addEventListener('blur', () => {
    updateApi({
      _id: todo._id,
      title: rowInputElt.value,
    }).then((todoFromApi) => {
      console.log('updated', todoFromApi);
    });
  });

  const buttonRemoveElt = document.createElement('button');
  buttonRemoveElt.innerText = '-';
  append(rowElt, buttonRemoveElt); // <div><input type="checkbox"><input value="todo"><button>-</button></div>

  buttonRemoveElt.addEventListener('click', (event) => {
    remove(event.target.parentElement);
    removeFromApi(todo).then(() => {
      console.log('deleted', todo);
    });
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
const isToggleChecked = localStorage.getItem('isToggleChecked');
checkElt.checked = isToggleChecked === 'true';

formElt.addEventListener('submit', (event) => {
  event.preventDefault();

  const todo = {
    title: inputElt.value,
    completed: false,
  };

  addToApi(todo).then((todoFromApi) => {
    console.log('inserted', todoFromApi);
    addTodo(todoFromApi);
  });
});

checkElt.addEventListener('change', () => {
  const checkboxesNodeList = divElt.querySelectorAll('input[type=checkbox]');

  localStorage.setItem('isToggleChecked', checkElt.checked);

  const checkboxes = Array.from(checkboxesNodeList);
  checkboxes.forEach((checkbox) => {
    checkbox.checked = checkElt.checked;

    updateApi({
      _id: checkbox.parentNode.dataset.todoId,
      completed: checkElt.checked,
    }).then((todoFromApi) => {
      console.log('updated', todoFromApi);
    });
  });

  // import asynchrone qui sera buildé dans un second
  // fichier chargé au moment du clic
  /*
  import('./debug').then(({ debug }) => {
    debug('checkbox change');
  });
  */
});

getListFromApi().then((todos) => {
  todos.forEach((todo) => {
    addTodo(todo);
  });
});
