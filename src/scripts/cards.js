const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];
const templateCard = document.getElementById('card-template').content;
const newCardDiv = document.querySelector('.popup_type_new-card');
const cardFormElemnt = newCardDiv.querySelector('.popup__form');

const nameCard = cardFormElemnt.querySelector('.popup__input_type_card-name');
const urlCard = cardFormElemnt.querySelector('.popup__input_type_url');
console.log(templateCard);
const placesList = document.querySelector('.places__list');

function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

function createCard(name, link) {
    // console.log(link)
    const cardClone = document.importNode(templateCard, true);
    cardClone.querySelector('.card__title').textContent = name;
    cardClone.querySelector('.card__image').src = link;
    cardClone.querySelector('.card__image').alt = name;
    cardClone.querySelector('.card__image').addEventListener('click', () => {
        const popup_type_image = document.querySelector('.popup_type_image');
        popup_type_image.querySelector('.popup__image').src = link;
        popup_type_image.querySelector('.popup__caption').textContent = name;
        openModal(popup_type_image);
    });
    placesList.insertBefore(cardClone, placesList.firstChild);
}

initialCards.forEach((obj) => {
    createCard(obj.name, obj.link);
});

cardFormElemnt.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log()
    createCard(nameCard.value, urlCard.value);
})