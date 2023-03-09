import "./style.css";

// Sticking navbar
window.addEventListener("scroll", stickNavbar);

document
  .querySelectorAll(".collapse-title")
  .forEach((item) => item.addEventListener("click", throttle(toggleCollapse)));

function toggleCollapse() {
  // If collapse-open is previously absent and now present the toggle property returns true
  if (this.parentNode.classList.toggle("collapse-open")) {
    // this.textContent = "-";
  } else {
    // this.textContent = "+";
  }
}

function slider() {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".testimonial-slide");

  const indicatorNodes = createIndicators(slides.length);
  activateIndicator(indicatorNodes, null, currentSlide);

  document
    .querySelector(".slider-next")
    .addEventListener("click", throttle(nextSlide));
  document
    .querySelector(".slider-prev")
    .addEventListener("click", throttle(prevSlide));
  const slider = document.querySelector(".slider");
  // let itemsPerSlide = setPrope;
  // debugger;

  window.addEventListener("resize", throttle(onSliderResize, 500));

  function nextSlide() {
    const prevSlide = currentSlide;
    console.log("prevSlide", currentSlide);
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    console.log("currentSlide", currentSlide);
    const displacement = slides[prevSlide].offsetWidth * currentSlide;
    slider.style.transform = `translateX(${-displacement}px)`;

    activateIndicator(indicatorNodes, prevSlide, currentSlide);
  }

  function prevSlide() {
    const prevSlide = currentSlide;
    console.log("prevSlide", currentSlide);
    if (currentSlide > 0) {
      currentSlide--;
    }
    console.log("currentSlide", currentSlide);
    const displacement = slides[prevSlide].offsetWidth * currentSlide;
    slider.style.transform = `translateX(${displacement}px)`;
    activateIndicator(indicatorNodes, prevSlide, currentSlide);
  }

  function onSliderResize(e) {}
}

function createIndicators(numberOfSlides) {
  const nodes = [];
  for (let i = 0; i < numberOfSlides; i++) {
    const indicatorNode = document.createElement("div");
    indicatorNode.classList.add("indicator", `i-${i}`);
    nodes.push(indicatorNode);
    document.querySelector(".indicators").appendChild(indicatorNode);
  }
  return nodes;
}

function activateIndicator(indicatorNodes, prevSlide, currentSlide) {
  indicatorNodes[prevSlide]?.classList.remove("active");
  indicatorNodes[currentSlide]?.classList.add("active");

  // TODO: for now
  const displacement = prevSlide < currentSlide ? 178 : -178;

  if (currentSlide % 4 === 0) {
    indicatorNodes[
      currentSlide
    ].parentNode.transform = `translate(${displacement}px)`;
  }
}

function throttle(callback, delay = 200) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        callback.apply(this, args);
        timer = false;
      }, delay);
    }
  };
}

slider();

function stickNavbar(e) {
  let pageYOffset = window.scrollY;
  const stickOffset = 5;
  let navbar = document.querySelector("nav");

  if (pageYOffset > navbar.offsetHeight + stickOffset) {
    navbar.classList.add("menu-sticky");
  }
  if (pageYOffset < navbar.offsetHeight - stickOffset) {
    navbar.classList.remove("menu-sticky");
  }
  // debugger;
}
