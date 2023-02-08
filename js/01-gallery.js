import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const imagesList = galleryItems.map(
		({ preview, original, description }) => {
			return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
	}
).join('');

gallery.insertAdjacentHTML('afterbegin', imagesList);

gallery.addEventListener('click', onImageClick);

function onImageClick(e) {
	e.preventDefault();
	if (e.target.nodeName !== 'IMG') {
		return;
	}
		
	const targetImage = e.target.dataset.source;
	
	basicLightbox.create(`
    <img src="${targetImage}">
  `).show();
}