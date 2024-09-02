document.querySelectorAll(".skill").forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    this.classList.toggle("rotated");
    this.classList.toggle("open");
  });
});

const sections = document.querySelectorAll("section");
const navList = document.querySelectorAll("nav ul li");
let mybutton = document.querySelector(".top-btn");
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let current = "";
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navbar.classList.add("shadow");
  } else {
    mybutton.style.display = "none";
    navbar.classList.remove("shadow");
  }
  sections.forEach((section) => {
    if (section.getAttribute("id") == null) return;
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 2) {
      current = section.getAttribute("id");
    }
  });
  navList.forEach((li) => {
    console.log(current);

    li.classList.remove("active");
    console.log(li);

    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
