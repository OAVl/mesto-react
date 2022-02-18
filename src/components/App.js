import React, {useEffect, useState} from 'react';
import '../pages/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    api.getProfile()
        .then((data) => {
          setCurrentUser(data);
        }).catch((err) => {
      alert(`Ошибка: ${err}`)
    })
  }, [])

    useEffect(() => {
        api.getInitialCards()
            .then((card) => {
                setCards(card)
            }).catch((err) => {
            alert(`Ошибка: ${err}`)
        })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        }).catch((err) => {
            alert(`Ошибка: ${err}`)
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards(cards.filter((c) => c !== card));
        }).catch((err) => {
            alert(`Ошибка: ${err}`)
        });
    }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  const handleCardClick = selectedCard => setSelectedCard(selectedCard);

  function handleUpdateUser(data) {
      setIsLoadingData(true);
    api.setUserInfo(data)
        .then((data) => {
          setCurrentUser(data);
          closeAllPopups();
        }).catch((err) => {
      alert(`Ошибка: ${err}`)
    }).finally(() => {
        setIsLoadingData(false);
      });

  }

    function handleUpdateAvatar(data) {
        setIsLoadingData(true);
        api.changeAvatar(data)
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            }).catch((err) => {
            alert(`Ошибка: ${err}`)
        }).finally(() => {
            setIsLoadingData(false);
        });
    }

    function handleAddPlaceSubmit(card) {
        setIsLoadingData(true);
        api.setCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            }).catch((err) => {
            alert(`Ошибка: ${err}`)
        }).finally(() => {
            setIsLoadingData(false);
        });
    }

  return (
        <CurrentUserContext.Provider value={currentUser}>
      <div className="root__wrapper">
        <Header />
        <Main onEditAvatar={() => setIsEditAvatarPopupOpen(true)}
              onAddPlace={() => setIsAddPlacePopupOpen(true)}
              onEditProfile={() => setIsEditProfilePopupOpen(true)}
              onClickCard={handleCardClick}
              cards={cards}
              onCardDelete={handleCardDelete}
              onCardLike={handleCardLike}
        />
        <Footer />
      </div>

      <EditProfilePopup isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        isLoadingData={isLoadingData}
      />

      <AddPlacePopup isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
                     onAddPlace={handleAddPlaceSubmit}
                     isLoadingData={isLoadingData}
      />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
                       onUpdateAvatar={handleUpdateAvatar}
                       isLoadingData={isLoadingData}
      />

      <PopupWithForm title='Вы уверены?' name='deleteCard' button='Да' />

      <ImagePopup card={selectedCard}
                  isOpen={selectedCard.name && !!selectedCard.link}
                  onClose={closeAllPopups}>
      </ImagePopup>
        </CurrentUserContext.Provider>
  );
}

export default App;
