import Mobilemenu from './modules/MoblieMenu.js';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new Mobilemenu();
new RevealOnScroll($('.feature-item'), "85%");
new RevealOnScroll($('.testimonial'), "65%");
var stickyHeader = new StickyHeader();
