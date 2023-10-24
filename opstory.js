// counter js
const counters = document.querySelectorAll(".count");

// callback function for the Intersection Observer
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute("data-target"));
      const duration = parseInt(counter.getAttribute("data-duration"));
      let count = 0;

      const increment = (target / duration) * 16.67; // 16.67ms ~ 60 FPS

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = numberWithCommas(Math.round(count));
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = numberWithCommas(target);
        }
      };
      updateCount();
      // Unobserve the target element to stop the animation
      observer.unobserve(counter);
    }
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the element is visible
});

//thousand separator 
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
// Observe each counter element
counters.forEach((counter) => {
  observer.observe(counter);
});


//timeline js - teams
let items = document.querySelectorAll(".timeline li");
// check if an element is in the viewport
function isElementInViewport(el) {
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to apply the "in-view" class to visible elements
function callbackFunc() {
  for (let i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}
// Attach the callback function to various events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);


// card sign js /teammembers/
let elements = document.querySelectorAll('.opstory .card');

elements.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    // Add the "opened" class to the .sign-wrapper element when the mouse is over the card
    let cardText = this.querySelector(".sign-wrapper");
    cardText.classList.remove("closed");
    cardText.classList.add("opened");
  });

  element.addEventListener("mouseout", function () {
    // Remove the "opened" class and add the "closed" class to the .sign-wrapper element when the mouse is no longer over the card
    let cardText = this.querySelector(".sign-wrapper");
    cardText.classList.remove("opened");
    cardText.classList.add("closed");
  });
});