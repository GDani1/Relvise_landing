const hamb = document.querySelector("#hamb");
const body = document.body;
const menu= document.querySelector("#menu");
const menuItem= document.querySelectorAll ("#menu__item");


console.log(menuItem);

hamb.addEventListener("click", function (e){
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});
 

menuItem.forEach(item=>{ 
item.addEventListener("click", function (e){
  menu.classList.toggle("active");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
});
});
