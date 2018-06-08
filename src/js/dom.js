/**
 * Prepend child to element
 * @param {Element} container
 * @param {Element} element
 */
function prepend(container, element) {
  if (container.children.length) {
    container.insertBefore(element, container.firstElementChild);
  } else {
    container.appendChild(element);
  }
}

/**
 * Append child to element
 * @param {Element} container
 * @param {Element} element
 */
function append(container, element) {
  container.appendChild(element);
}

/**
 * Remove element
 * @param {Element} element
 */
function remove(element) {
  element.parentElement.removeChild(element);
}

/**
 * Before element
 * @param {Element} afterElement
 * @param {Element} element
 */
function before(afterElement, element) {
  if (afterElement === document.documentElement) {
    throw new Error('Can\'t insert before documentElement');
  }
  afterElement.parentElement.insertBefore(element, afterElement);
}

export { prepend, append, remove, before };
