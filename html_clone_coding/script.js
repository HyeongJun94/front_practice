const user_site = 1
const project_site = 2

var slideIndex = 1;

showSlides(slideIndex)
onSelected(user_site)

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 

  setTimeout(function() {showSlides(slideIndex+=1)},4000);
}

function onSelected(which){
  var btn_user = document.getElementById("user-site-btn");
  var btn_project = document.getElementById("project-site-btn");
  
  var doc_user = document.getElementById("user-site");
  var doc_project = document.getElementById("project-site");

  if(which == user_site){
    btn_user.className = "selected"
    btn_project.className = null
    doc_user.style.display = 'block';
    doc_project.style.display = 'none';
  } else {
    btn_project.className = "selected"
    btn_user.className = null
    doc_user.style.display = 'none';
    doc_project.style.display = 'block';
  }
  
}
