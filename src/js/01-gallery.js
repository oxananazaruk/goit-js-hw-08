import SimpleLightbox from "simplelightbox";
import '/node_modules/simplelightbox/dist/simple-lightbox.min.css';

import {createMarkup} from './utils.js';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = createMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);