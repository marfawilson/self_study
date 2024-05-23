import { useState } from 'react';

export default function UserInputs() {
    const [enteredValue, setEnteredValue] = useState(0);

    function handleInputValues(event) {
        setEnteredValue(event.target.value)
    }

    return (
        <form className="input-group" id="user-input">
            <p>
                <label>Initial Investment</label>
                <input type="number" required onChange = {handleInputValues} value = {enteredValue} />
                <label>Annual Investment</label>
                <input type="number" required />
            </p>

            <p>
                <label>Expected Return</label>
                <input type="number" required />
                <label>Duration</label>
                <input type="number" required />
            </p>
        </form>
    )
}