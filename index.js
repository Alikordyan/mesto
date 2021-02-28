
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button'); // добавляем кнопки

let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__subtitle');

const formElement = document.querySelector('.edit-form');
let nameInput = formElement.querySelector('.edit-form__item_el_name');
let jobInput = formElement.querySelector('.edit-form__item_el_job');

// инициализация значения value и input
function setInputValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  console.log(nameInput.value);
}

function openPopup() {
  popup.classList.add('popup_opened');
  setInputValue();//открытие
}

function closePopup() {
  popup.classList.remove('popup_opened'); // закрытие
}

editButton.addEventListener('click', openPopup); //клик открытие 
closeButton.addEventListener('click', closePopup); // клик закрытие 




function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(); // сохраняем данные при внесения изменения

}

formElement.addEventListener('submit', formSubmitHandler);
