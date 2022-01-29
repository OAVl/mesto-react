import React from 'react';

function InputPopupAvatar() {
    return (
        <>
            <label className="popup__label">
                <input className="popup__field popup__field_input_name"
                       id="popup__avatar"
                       name="avatar"
                       type="url"
                       placeholder="Название"
                       autoComplete="off"
                       minLength="2"
                       required/>
                <span id="popup__avatar-error" className="popup__error"></span>
            </label>
        </>
    );
}

export default InputPopupAvatar;