
/**
 * 
 * @param {Event} event 
 */
const handleLike = async (event) => {
  /**
   * @type {HTMLElement}
   */
  const targetElement = event.target;
  if(targetElement.classList.contains("fa-regular")) {
    targetElement.classList.remove("fa-regular");
    targetElement.classList.add("fa-solid");
  }
  else {
    targetElement.classList.remove("fa-solid");
    targetElement.classList.add("fa-regular");
  
  }
 
}
export default handleLike;
 