
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

const profile = document.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');

let profileName = profile.querySelector('.profile__name');
let profileJob = profile.querySelector('.profile__subtitle');

const formElement = document.querySelector('.edit-form');
let nameInput = formElement.querySelector('.edit-form__item_el_name');
let jobInput = formElement.querySelector('.edit-form__item_el_job');


function setInputValue() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openPopup() {
  popup.classList.add('popup_opened');
  setInputValue();
}

function closePopup() {
  popup.classList.remove('popup_opened'); 
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();

}

formElement.addEventListener('submit', formSubmitHandler);
