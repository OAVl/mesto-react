import React, {useState} from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import InputPopupProfile from "./InputPopupProfile";
import InputPopupElement from "./InputPopupElement";
import InputPopupAvatar from "./InputPopupAvatar";
import PopupImage from "./PopupImage";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  const handleCardClick = selectedCard => setSelectedCard(selectedCard)

    return (
      <div className="root">
      <div className="root__wrapper">
        <Header />
        <Main onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
              onAddPlace={() => setIsAddPlacePopupOpen(true)}
              onEditProfile={() => setIsEditProfilePopupOpen(true)}
              onClickCard={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm title='Редактировать профиль' name='profile' button='Сохранить'
                     isOpen={isEditProfilePopupOpen}
                     closeAllPopups={closeAllPopups}>
        <InputPopupProfile />
      </PopupWithForm>

      <PopupWithForm title='Новое место' name='element' button='Создать'
                     isOpen={isAddPlacePopupOpen}
                     closeAllPopups={closeAllPopups}>
        <InputPopupElement />
      </PopupWithForm>

      <PopupWithForm title='Обновить аватар' name='avatar' button='Сохранить'
                     isOpen={isEditAvatarPopupOpen}
                     closeAllPopups={closeAllPopups}>
        <InputPopupAvatar />
      </PopupWithForm>

      <PopupWithForm title='Вы уверены?' name='deleteCard' button='Да' />

      <PopupImage card={selectedCard}
                  onClose={closeAllPopups}>

      </PopupImage>


      </div>
  );
}

export default App;
