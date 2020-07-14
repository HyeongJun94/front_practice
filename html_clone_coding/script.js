const user_site = 1
const project_site = 2

const a_terminal = 1
const github_desktop = 2
const i_dont_know = 3

var slideIndex = 1;

showSlides(slideIndex)
onSelected(user_site)
choiceList(a_terminal)

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


function choiceList(which){
  var btn_a_terminal = document.getElementById("a-terminal-btn")
  var btn_github_desktop = document.getElementById("github-desktop-btn")
  var btn_i_dont_know = document.getElementById("i-dont-know-btn")

  var doc_a_terminal = document.getElementsByClassName("a-terminal")
  var doc_github_desktop = document.getElementsByClassName("github-desktop")
  var doc_i_dont_know = document.getElementsByClassName("i-dont-know")

  btn_a_terminal.className = null;
  btn_github_desktop.className = null;
  btn_i_dont_know.className = null;

  for(var i=0; i<doc_a_terminal.length; i++){
    doc_a_terminal[i].style.display = 'none';
  }
  for(var i=0; i<doc_github_desktop.length; i++){
    doc_github_desktop[i].style.display = 'none';
  }
  for(var i=0; i<doc_i_dont_know.length; i++){
    doc_i_dont_know[i].style.display = 'none';
  }

  if(which == a_terminal){
    btn_a_terminal.className = "selected";
    for(var i=0; i<doc_a_terminal.length; i++){
      doc_a_terminal[i].style.display = 'block';
    }
  }
  else if(which == github_desktop){
    btn_github_desktop.className = "selected";
    for(var i=0; i<doc_github_desktop.length; i++){
      doc_github_desktop[i].style.display = 'block';
    }
  }
  else {
    // which == i_dont_know
    btn_i_dont_know.className = "selected";
    for(var i=0; i<doc_i_dont_know.length; i++){
      doc_i_dont_know[i].style.display = 'block';
    }
  }
}