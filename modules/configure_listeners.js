import getElement from "./get_element"

const configureListener = (element, handler) => {
  /**
   * @type {HTMLElement}
   */
  const el = getElement(element,".like-btn");
  el.addEventListener("click",handler);
  
}

export default configureListener;