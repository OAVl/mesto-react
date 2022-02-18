import React from 'react';
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__button-delete ${isOwn ? 'element__button-delete' : 'element__button-delete_none'}`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_active' : 'element__like'}`;


    return (
        <article key={card._id} className="element">
            <img className="element__image" src={card.link} alt="фотография карточки" onClick={_ => onCardClick(card)}/>
            <button className={cardDeleteButtonClassName} onClick={_ => onCardDelete(card)}></button>
            <div className="element__wrapper">
                <h2 className="element__title">{card.name}</h2>
                <button className={cardLikeButtonClassName} type="button" onClick={_ => onCardLike(card)}></button>
                <p className="element__counter-like">{card.likes.length}</p>
            </div>
        </article>
    );
}

export default Card;