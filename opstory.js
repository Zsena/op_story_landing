const counters = document.querySelectorAll(".count");
const speed = 1000;

// Define a callback function for the Intersection Observer
const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);

        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;

          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();

      // Unobserve the target element to stop the animation
      observer.unobserve(counter);
    }
  });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Trigger when 50% of the element is visible
});

// Observe each counter element
counters.forEach((counter) => {
  observer.observe(counter);
});


 let items = document.querySelectorAll(".timeline li");

 function isElementInViewport(el) {
   let  rect = el.getBoundingClientRect();
   return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <=
       (window.innerHeight || document.documentElement.clientHeight) &&
     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 }

 function callbackFunc() {
   for (let  i = 0; i < items.length; i++) {
     if (isElementInViewport(items[i])) {
       items[i].classList.add("in-view");
     }
   }
 }

 window.addEventListener("load", callbackFunc);
 window.addEventListener("resize", callbackFunc);
 window.addEventListener("scroll", callbackFunc);



 let elements = document.querySelectorAll('.opstory .card');

 elements.forEach(function(element) {
  element.addEventListener("mouseover", function() {
      // Add the "opened" class to the .sign-wrapper element when the mouse is over the card
      let cardText = this.querySelector(".sign-wrapper");
      cardText.classList.remove("closed");
      cardText.classList.add("opened");
  });

  element.addEventListener("mouseout", function() {
      // Remove the "opened" class and add the "closed" class to the .sign-wrapper element when the mouse is no longer over the card
      let cardText = this.querySelector(".sign-wrapper");
      cardText.classList.remove("opened");
      cardText.classList.add("closed");
  });
});