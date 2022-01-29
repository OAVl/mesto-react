import React from 'react';

function InputPopupProfile() {
    return (
        <>
            <label className="popup__label">
                <input className="popup__field popup__field_input_name"
                       id="popup__name"
                       name="userName"
                       type="text"
                       placeholder="Ваше имя"
                       autoComplete="off"
                       minLength="2"
                       maxLength="40"
                       required/>
                <span id="popup__name-error" className="popup__error"></span>
            </label>

            <label className="popup__label">
                <input className="popup__field popup__field_input_job"
                       id="popup__job"
                       name="userJob"
                       type="text"
                       placeholder="Ваша работа"
                       autoComplete="off"
                       minLength="2"
                       maxLength="200"
                       required/>
                <span id="popup__job-error" className="popup__error"></span>
            </label>
        </>
    );
}

export default InputPopupProfile;