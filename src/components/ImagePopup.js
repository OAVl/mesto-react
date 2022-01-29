import React from 'react';

function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_image ${card && 'popup_opened'}`}>
            <div className="popup__wrapper">
                <img className="popup__img" src={card ? card.link : ''} alt={card ? card.name : ''} />
                <p className="popup__text">{card ? card.name : ''}</p>
                <button className="popup__button-close" type="button" onClick={onClose}></button>
            </div>
        </div>
    );
}

export default ImagePopup;