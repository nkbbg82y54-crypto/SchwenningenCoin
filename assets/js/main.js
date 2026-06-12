function toggleFaq(button){
  const item = button.closest(".faq-item");
  item.classList.toggle("active");
}

function toggleMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu){ menu.classList.toggle("active"); }
}

function closeMenu(){
  const menu = document.getElementById("mobileMenu");
  if(menu){ menu.classList.remove("active"); }
}

function openModal(){
  const modal = document.getElementById("impressum-modal");
  if(modal){ modal.style.display="block"; }
}

function closeModal(){
  const modal = document.getElementById("impressum-modal");
  if(modal){ modal.style.display="none"; }
}

function openPrivacy(){
  const modal = document.getElementById("privacy-modal");
  if(modal){ modal.style.display="block"; }
}

function closePrivacy(){
  const modal = document.getElementById("privacy-modal");
  if(modal){ modal.style.display="none"; }
}

function copyAddress(){
  navigator.clipboard.writeText("3tHuuQm2qN3v6NAvf9tJuEagGdu2Mofpq935udPkQr9E");
  const button = document.querySelector(".copy-btn");
  if(button){
    button.innerText = "Adresse kopiert ✓";
    setTimeout(()=>{button.innerText="Adresse kopieren"},2000);
  }
}

function loadPartials(){
  const headerTarget = document.getElementById("site-header");
  const footerTarget = document.getElementById("site-footer");

  if(headerTarget){
    fetch("header.html")
      .then(response => response.text())
      .then(html => { headerTarget.innerHTML = html; });
  }

  if(footerTarget){
    fetch("footer.html")
      .then(response => response.text())
      .then(html => { footerTarget.innerHTML = html; });
  }
}

document.addEventListener("DOMContentLoaded", loadPartials);

window.onclick=function(event){
  const impressum=document.getElementById("impressum-modal");
  const privacy=document.getElementById("privacy-modal");
  if(impressum && event.target==impressum){impressum.style.display="none";}
  if(privacy && event.target==privacy){privacy.style.display="none";}
};
