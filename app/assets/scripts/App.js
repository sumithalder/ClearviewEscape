import Mobilemenu from './modules/MoblieMenu.js';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new Mobilemenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "65%");
