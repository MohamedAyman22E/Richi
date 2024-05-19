// text rotate
let text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => `<b style ="transform:rotate(${i * 6.3}deg")>${char}</b>`)
  .join("");

// change link in about

let buttons = document.querySelectorAll(".about-btn button");
let contents = document.querySelectorAll(".content");
buttons.forEach((e, index) => {
  e.addEventListener("click", () => {
    buttons.forEach(ele => {
      contents.forEach(content => (content.style.display = "none"));
      contents[index].style.display = "block";

      ele.classList.remove("active");
      e.classList.add("active");
    });
  });
});

// // filter portfolio

let filterButton = document.querySelectorAll(".filter-buttons button");
filterButton.forEach(ele => {
  ele.addEventListener("click", () => {
    filterButton.forEach(e => {
      e.classList.remove("active");
    });
    ele.classList.add("active");
  });
});

var mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".box",
  },
  animation: {
    duration: 500,
  },
});
// navList
let close = document.querySelector(".close");
let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  nav.classList.add("active");
});
close.addEventListener("click", () => {
  nav.classList.remove("active");
});
//
let allSection = document.querySelectorAll("section");
let links = document.querySelectorAll(".navList li a");
window.onscroll = () => {
  allSection.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 80;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      document
        .querySelector(".navList li a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navList li a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};
