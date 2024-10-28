const isElementIsScrolled = el => {

  // how close the element is to the top of the page
  const elY = el.getBoundingClientRect().top;

  // Distance from top of screen to count as visible as a percentage
  const scrollLimit = window.innerHeight * 0.9;

  if (elY <= scrollLimit) {
    return true;
  }

  return false;
}

const animateElements = (els) => {
  els.forEach((el, i) => {
    if (isElementIsScrolled(el)) {
      el.classList.add('animate');
    }
  });
}

export const initAnimations = () => {
  const animatedElements = document.querySelectorAll('[class*=animate');

  if (animatedElements) {
    // Fire on page load
    animateElements(animatedElements);

    // listen on scroll
    document.addEventListener('scroll', () => {
      animateElements(animatedElements);
    });
  }
}