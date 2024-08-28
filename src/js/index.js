import mobileNav from './modules/mobile-nav.js';
import { initScrollReveal } from "./modules/reveal";
mobileNav();

window.addEventListener('load', () => {
  initScrollReveal()

})
