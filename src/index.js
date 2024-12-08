const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');

const fixProfileBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');

fixProfileBtn.addEventListener('click', () => {
    openModal(profilePopup);
});
addCardBtn.addEventListener('click', () => {
    openModal(cardPopup);
});
profilePopup.querySelector('.popup__close').addEventListener('click', () => {
    hideModal(profilePopup);
});
cardPopup.querySelector('.popup__close').addEventListener('click', () => {
    hideModal(cardPopup);
});
imagePopup.querySelector('.popup__close').addEventListener('click', () => {
    hideModal(imagePopup);
});

function openModal(popup) {
    popup.classList.add('popup_is-opened');
}

function hideModal(popup) {
    popup.classList.remove('popup_is-opened');
}

// Находим форму в DOM
const profileFormElement = profilePopup.querySelector('.popup__form');
const cardFormElement = cardPopup.querySelector('.popup__form');
const imageFormElement = imagePopup.querySelector('.popup__form');
// profileFormElement// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('.popup__input_type_name');// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('.popup__input_type_description');// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const title = document.querySelector('.profile__title');
    const description = document.querySelector('.profile__description');
    // Выберите элементы, куда должны быть вставлены значения полей
    title.textContent = nameInput.value;
    description.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
    hideModal(profilePopup);
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

const likeCardBtn = document.querySelector('.card__like-button');
likeCardBtn.addEventListener('click', () => {
    likeCardBtn.classList.toggle('card__like-button_is-active');
});

function showError(inputId, errorMessage, formName) {
    const error = document.getElementById(inputId + '_error');
    const errorInput = document.getElementById(inputId);
    errorInput.classList.add('popup__error_active')
    error.classList.add('popup__error_active')
    error.textContent = errorMessage;
    console.log(formName)
    const btnSave = document.getElementById(formName + '-btn');
    // console.log(btnSave)
    btnSave.disabled = true;
}

function hideError(inputId, errorMessage, formName) {
    const error = document.getElementById(inputId + '_error');
    error.classList.remove('popup__error_active');
    const errorInput = document.getElementById(inputId);
    errorInput.classList.remove('popup__error_active');
    const btnSave = document.getElementById(formName + '-btn');
    btnSave.disabled = false;
}

function isValid(formElement, inputElement) {
    if (inputElement.validity.valid) {
        hideError(inputElement.id, inputElement.validationMessage, formElement.getAttribute('name'));
        console.log(formElement.getAttribute('name'));
    } else {
        showError(inputElement.id, inputElement.validationMessage, formElement.getAttribute('name'));
    }
}

const setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener('input', () => {
            // console.log('sadfsdf');
            // Внутри колбэка вызовем isValid,
            // console.log(formElement.getAttribute('name'))
            // передав ей форму и проверяемый элемент
            isValid(formElement, inputElement)
        });
    });
};
// console.log(profileFormElement.name)
setEventListeners(profileFormElement);
setEventListeners(cardFormElement);

function closeByEsc(evt) {
    const openedPopup = document.querySelector('.popup_is-opened');
    hideModal(openedPopup);
}

document.addEventListener('keydown', function (event) {
    // Проверяем, является ли нажатая клавиша Esc (код клавиши 27)
    if (event.keyCode === 27) {
        closeByEsc();
    }
});
document.addEventListener('click', function(event) {
    // Проверяем, был ли клик вне модального окна
    if (event.target === profilePopup) {
        hideModal(profilePopup);
    }
    else if (event.target === cardPopup){
        hideModal(cardPopup);
    }
    else if (event.target === imagePopup){
        hideModal(imagePopup);
    }
});
// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
