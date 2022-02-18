import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoadingData }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value)
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm title='Редактировать профиль' name='profile' button={isLoadingData ? 'Сохранение...' : 'Сохранить'}
                       isOpen={isOpen}
                       closeAllPopups={onClose}
                       onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input className="popup__field popup__field_input_name"
                       id="popup__name"
                       name="userName"
                       type="text"
                       placeholder="Ваше имя"
                       autoComplete="off"
                       minLength="2"
                       maxLength="40"
                       value={name}
                       onChange={handleChangeName}
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
                       value={description}
                       onChange={handleChangeDescription}
                       required/>
                <span id="popup__job-error" className="popup__error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;