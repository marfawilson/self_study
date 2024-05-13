import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(editing => !editing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let newPlayerName = <span className='player-name'>{playerName}</span>;
    // let btnCaption = 'Edit';

    if(isEditing) {
        newPlayerName = <input type = 'text' required value = {playerName} onChange = {handleNameChange} />;
        // btnCaption = 'Save';
    }

    return (
        <li>
            <span className='player'>
                {newPlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}