import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoadingData }) {

    const avatarInput = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            avatar: avatarInput.current.value
        });
    }

    React.useEffect(() => {
        avatarInput.current.value = '';
    }, [isOpen]);

    return (
        <PopupWithForm title='Обновить аватар' name='avatar' button={isLoadingData ? 'Сохранение...' : 'Сохранить'}
                       isOpen={isOpen}
                       closeAllPopups={onClose}
                       onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input className="popup__field popup__field_input_name"
                       id="popup__avatar"
                       name="avatar"
                       type="url"
                       placeholder="Название"
                       autoComplete="off"
                       minLength="2"
                       ref={avatarInput}
                       required/>
                <span id="popup__avatar-error" className="popup__error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;