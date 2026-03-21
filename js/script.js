// PARALLAX EFFECT

// PARALLAX EFFECT
window.addEventListener("scroll",function(){
  let scroll = window.scrollY;

  document.querySelector(".shape1").style.transform =
  "translateY("+scroll*0.2+"px)";

  document.querySelector(".shape2").style.transform =
  "translateY("+scroll*-0.2+"px)";
});


// ✅ PANEL CLICK FIX (ADD THIS BELOW)
document.addEventListener("DOMContentLoaded", () => {
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      panels.forEach(p => p.classList.remove('active'));
      panel.classList.add('active');
    });
  });
});
