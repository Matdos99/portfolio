// aggiornare la data del copyright
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// navbar fixed
const navbar = document.getElementById("nav");
const buttonTop = document.querySelector(".top-link");
const footer = document.querySelector(".footer-section");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height - 30;
  const footerHeight = footer.getBoundingClientRect().y;
  //console.log(footerHeight)

  if (scrollHeight >= navHeight) {
    navbar.classList.add("scroll-nav");
    navbar.style.position = "fixed";
  } else {
    navbar.classList.remove("scroll-nav");
    navbar.style.position = "";
  }

  if (scrollHeight >= 170) {
    buttonTop.style.position = "fixed";
    buttonTop.style.bottom = "5em";
  } else {
    buttonTop.style.position = "";
  }

  if (scrollHeight =  footerHeight) {
    buttonTop.style.color = "white";
  } else {
    buttonTop.style.color = "";
  }
});

//link alle section

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    //console.log(id)
    const element = document.getElementById(id);
    let position = element.offsetTop;

    //console.log(position)

    const navHeight = navbar.getBoundingClientRect().height;
    window.scrollTo({
      left: 0,
      top: position - navHeight,
    });
  });
});
