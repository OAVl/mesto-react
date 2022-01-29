import React, {useState, useEffect} from 'react';
import api from '../utils/Api';
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onClickCard}) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        api.getProfile()
            .then((data) => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
        })
        api.getInitialCards()
            .then((card) => {
                setCards(card)
            })
    }, [])


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__wrapper-avatar">
                        <img className="profile__avatar" src={userAvatar} alt="фото пользователя" />
                        <span onClick={onEditAvatar} className="profile__editAvatar"></span>
                    </div>

                    <div className="profile__wrapper">
                        <div className="profile__info">
                            <h1 className="profile__name">{userName}</h1>
                            <p className="profile__description">{userDescription}</p>
                        </div>
                        <button onClick={onEditProfile} className="profile__button-edit" type="button"></button>
                    </div>
                </div>

                <button onClick={onAddPlace} className="profile__button-add" type="button"></button>
            </section>

            <section className="elements">
                {cards.map((card) => <Card card={card} key={card._id} onCardClick={onClickCard}/> )}
            </section>
        </main>
    );
}

export default Main;