import React from 'react';

function InputPopupElement() {
    return (
        <>
            <label className="popup__label">
                <input className="popup__field popup__field_input_name"
                       id="popup__elementName"
                       name="elementName"
                       type="text"
                       placeholder="Название"
                       autoComplete="off"
                       minLength="2"
                       maxLength="30"
                       required/>
                <span id="popup__elementName-error" className="popup__error"></span>
            </label>

            <label className="popup__label">
                <input className="popup__field popup__field_input_job"
                       id="popup__link"
                       name="link"
                       type="url"
                       autoComplete="off"
                       placeholder="Ссылка на картинку"
                       required/>
                <span id="popup__link-error" className="popup__error"></span>
            </label>
        </>
    );
}

export default InputPopupElement;