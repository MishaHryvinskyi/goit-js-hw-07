import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const cardItem = createListElement(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardItem);

function createListElement(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            data-source="${original}"
            />
        </a>
    </li>`;
}).join(' ');
}

galleryList.addEventListener('click', clickOpenModal);
const instance = '';

function clickOpenModal(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    window.addEventListener('keydown', onEscapePress);
    const clickOpenModal = event.target;
    const indexGalleryItems = galleryItems.findIndex(
        option => option.description === clickOpenModal.alt
    );

    let instance = basicLightbox.create(`
        <img class="gallery__image" src="${galleryItems[indexGalleryItems].original}"
        alt="${galleryItems[indexGalleryItems].description}">`);
    
    instance.show();

    const clickCloseModal = document.querySelector(".basicLightbox");
    clickCloseModal.addEventListener('click', onCloseModal);
};

function onCloseModal() {
    window.removeEventListener('keydown', onEscapePress);
    instance.close;
    const clickCloseModal = document.querySelector('.basicLightbox');
    clickCloseModal.remove();
};

function onEscapePress(event) {
    if (event.code === 'Escape') {
        const closeEl = document.querySelector('.basicLightbox');
        closeEl.remove();
        window.removeEventListener('keydown', onEscapePress);
    }
};