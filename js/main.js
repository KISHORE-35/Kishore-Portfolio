const themeBtn = document.querySelector(".theme-btn");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeBtn.innerHTML = "☀️";
}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("theme","dark");
        themeBtn.innerHTML = "☀️";

    }else{

        localStorage.setItem("theme","light");
        themeBtn.innerHTML = "🌙";

    }

});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const links = document.querySelectorAll(
'a, button, .project-btn, .contact-btn, .main-btn, .outline-btn'
);

links.forEach(item => {

    item.addEventListener('mouseenter', () => {
        cursor.style.width = '35px';
        cursor.style.height = '35px';
        cursor.style.background = '#E8D5EA';
        cursor.innerHTML = '/';
    });

    item.addEventListener('mouseleave', () => {
        cursor.style.width = '30px';
        cursor.style.height = '30px';
        cursor.style.background = '#FFE97A';
        cursor.innerHTML = '&lt;/&gt;';
    });

});