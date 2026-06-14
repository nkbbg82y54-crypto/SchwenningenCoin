function toggleDropdown(event){
  event.preventDefault();
  event.stopPropagation();

  const navMore = event.currentTarget.closest(".nav-more");

  if(navMore){
    navMore.classList.toggle("open");
  }
}

document.addEventListener("click", function(event){
  document.querySelectorAll(".nav-more.open").forEach(el=>{
    if(!el.contains(event.target)){
      el.classList.remove("open");
    }
  });
});

function toggleFaq(button){
  const item = button.closest(".faq-item");
  item.classList.toggle("active");
}

function toggleMenu(){
  document.getElementById("mobileMenu").classList.toggle("active");
}

function closeMenu(){
  document.getElementById("mobileMenu").classList.remove("active");
}

function openModal(){document.getElementById("impressum-modal").style.display="block"}
function closeModal(){document.getElementById("impressum-modal").style.display="none"}
function openPrivacy(){document.getElementById("privacy-modal").style.display="block"}
function closePrivacy(){document.getElementById("privacy-modal").style.display="none"}

function copyAddress(){
  navigator.clipboard.writeText("3tHuuQm2qN3v6NAvf9tJuEagGdu2Mofpq935udPkQr9E");
  const button = document.querySelector(".copy-btn");
  if(button){
    button.innerText = "Adresse kopiert ✓";
    setTimeout(()=>{button.innerText="Adresse kopieren"},2000);
  }
}

window.onclick=function(event){
  const impressum=document.getElementById("impressum-modal");
  const privacy=document.getElementById("privacy-modal");
  if(impressum && event.target==impressum){impressum.style.display="none"}
  if(privacy && event.target==privacy){privacy.style.display="none"}
}


function loadPartials(){
  const h=document.getElementById('site-header');
  const f=document.getElementById('site-footer');

  if(h){
    fetch('header.html').then(r=>r.text()).then(html=>h.innerHTML=html);
  }

  if(f){
    fetch('footer.html').then(r=>r.text()).then(html=>f.innerHTML=html);
  }
}

document.addEventListener('DOMContentLoaded', loadPartials);
