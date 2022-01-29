import React from 'react';

function PopupWithForm({name, title, button, children, isOpen, closeAllPopups}) {
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={`form-${name}`} noValidate>
                    {children}
                    <button className="popup__button" type="submit">{button}</button>
                </form>
                <button className="popup__button-close" type="button" onClick={closeAllPopups}></button>
            </div>
        </div>
    );
}

export default PopupWithForm;