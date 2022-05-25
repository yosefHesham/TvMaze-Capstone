import getElement from "./get_element"

const configureListener = (parent, handler, {childClassName}) => {
  /**
   * @type {HTMLElement}
   */

  /// like button element
  const childElement = getElement(parent,childClassName);


  childElement.addEventListener("click",handler);
  
}

export default configureListener;