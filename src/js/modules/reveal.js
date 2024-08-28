import ScrollReveal from "scrollreveal";

export function initScrollReveal() {
  ScrollReveal({
    duration: 2800,
    distance: '100%',
    delay: 200,
  })

  ScrollReveal().reveal('.reveal-up', {
    opacity: 0,
    origin: 'top',
    interval: 300
  });

  // text-reveal

  ScrollReveal().reveal('.text-reveal', {
    opacity: 0,
    scale: 0.3,
    delay: 200,
  });

  ScrollReveal().reveal('.treat-content', {
    opacity: 0,
    origin: 'left'
  });

  ScrollReveal().reveal('.treat-decor', {
    opacity: 0,
    origin: 'right'
  });


  ScrollReveal().reveal('.service__item', {
    opacity: 0,
    origin: 'bottom',
    interval: 500,
  });

  const imgScale = {
    scale: 0,
    opacity: 0.3,
  }
  ScrollReveal().reveal('.pets-group img', imgScale);
  ScrollReveal().reveal('.groom-img img', imgScale);

  ScrollReveal().reveal('.groom-list__info li', {
    opacity: 0,
    origin: 'right',
    interval: 300
  });

  ScrollReveal().reveal('.pets__item', {
    opacity: 0,
    scale: 0,
    interval: 200
  });
}