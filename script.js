const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
   cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if(cardTop < trigger){
      card.classList.add("show");
    }
  });

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.onclick = () => {
navMenu.classList.toggle("active");
};
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerHTML="☀️";
}else{
toggle.innerHTML="🌙";
}

}