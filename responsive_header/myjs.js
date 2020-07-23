// const ON = 1;
// const OFF = 0;
// var toogle_state = ON;

// var x = window.matchMedia("(max-width: 700px)");
// x.addListener(displayBurger(ON));

// if (x.matches){
//   console.log("Mathced");
// }else{
//   console.log("Not Mathced");
// }

// function displayBurger(state){
//   console.log("Print ");
//   var navbar_menu = document.getElementsByClassName("navbar_menu")[0];
//   var navbar_icons = document.getElementsByClassName("navbar_icons")[0];

//   if(state == ON){
//     navbar_icons.style.display = 'none';
//     navbar_menu.style.display = 'none';
//   }else {
//     navbar_icons.style.display = 'flex';
//     navbar_menu.style.display = 'flex';
//   }
// }

// function toggleBurger(){
  
//   if(toogle_state==ON){
//     toogle_state = OFF;
//   }else{
//     toogle_state = ON;
//   }

//   displayBurger(toogle_state);
// }

const toggle_btn = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar_menu')
const icons = document.querySelector('.navbar_icons')

toggle_btn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});