import getElement from './get_element';

const configureListener = (parent, handler, { childClassName, eventType = 'click' }) => {
  /**
   * @type {HTMLElement}
   */

  /// like button element
  const childElement = getElement(parent, childClassName);

  childElement.addEventListener(eventType, handler);
};

export default configureListener;