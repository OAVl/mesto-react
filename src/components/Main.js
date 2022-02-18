import React from 'react';
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onClickCard, cards, onCardLike, onCardDelete }) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__wrapper-avatar">
                        <img className="profile__avatar" src={currentUser.avatar} alt="фото пользователя" />
                        <span onClick={onEditAvatar} className="profile__editAvatar"></span>
                    </div>

                    <div className="profile__wrapper">
                        <div className="profile__info">
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <p className="profile__description">{currentUser.about}</p>
                        </div>
                        <button onClick={onEditProfile} className="profile__button-edit" type="button"></button>
                    </div>
                </div>

                <button onClick={onAddPlace} className="profile__button-add" type="button"></button>
            </section>

            <section className="elements">
                {cards.map((card) => ( <Card card={card}
                                           key={card._id}
                                           onCardClick={onClickCard}
                                           onCardLike={onCardLike}
                                           onCardDelete={onCardDelete}
                />)
                )}
            </section>
        </main>
    );
}

export default Main;