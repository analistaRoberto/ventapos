//apcion para mostrar ocultar parte del menu lateral
let toggle = document.querySelector('.toggle');
let navegacion = document.querySelector('.navegacion');
let menu = document.querySelector('.menu');
//Operacion
toggle.onclick = function(){
navegacion.classList.toggle('active');
menu.classList.toggle('active');
}
        
let list = document.querySelectorAll('.navegacion li');
function activelink(){
list.forEach((item) =>
item.classList.remove('hovered'));
this.classList.add('hovered'); 
}
list.forEach((item) =>
item.addEventListener('mouseover',activelink));
