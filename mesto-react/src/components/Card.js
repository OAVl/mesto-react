import React from 'react';

function Card({card, onCardClick}) {
    return (
        <article key={card._id} className="element">
            <img className="element__image" src={card.link} alt="фотография карточки" onClick={_ => onCardClick(card)}/>
            <button className="element__button-delete"></button>
            <div className="element__wrapper">
                <h2 className="element__title">{card.name}</h2>
                <button className="element__like" type="button"></button>
                <p className="element__counter-like">0</p>
            </div>
        </article>
    );
}

export default Card;