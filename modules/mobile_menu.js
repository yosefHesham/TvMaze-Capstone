const menuBtn = document.querySelector('.fa-bars') 
const menu = document.querySelector('.mobile-menu')

const closeBtn = document.querySelector(".fa-xmark")

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
})

const addMenuListener = () => { menuBtn.addEventListener("click",() => {
  console.log("WTF");
  menu.style.display = "block";

})
}
addMenuListener()


