import React, {useState} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoadingData }) {

    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleChangeName(e) {
        setName(e.target.value)
    }

    function handleChangeDescription(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace ({ name, link });
    }

    React.useEffect(() => {
        setName('');
        setLink('');
    }, [isOpen]);

    return (
        <PopupWithForm title='Новое место' name='element' button={isLoadingData ? 'Ожидание...' : 'Создать'}
                       isOpen={isOpen}
                       closeAllPopups={onClose}
                       onSubmit={handleSubmit}
        >
            <label className="popup__label">
                <input className="popup__field popup__field_input_name"
                       id="popup__elementName"
                       name="elementName"
                       type="text"
                       placeholder="Название"
                       autoComplete="off"
                       minLength="2"
                       maxLength="30"
                       value={name}
                       onChange={handleChangeName}
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
                       value={link}
                       onChange={handleChangeDescription}
                       required/>
                <span id="popup__link-error" className="popup__error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;