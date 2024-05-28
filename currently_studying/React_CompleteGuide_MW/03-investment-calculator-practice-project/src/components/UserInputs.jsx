import { useState } from 'react';

export default function UserInputs() {
    // managing state of user inputs with an object of initial values for each input
    // property name = input identifier
    const [enteredValue, setEnteredValue] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleInputValues(inputIdentifier, newValue) {
        // arrays/objects must be treated as immutable, so use of the spread operator
        // allows us to update values without changing the original array (just a copy)
        setEnteredValue(prevInputValue => {
            return {
                ...prevInputValue,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <form className="input-group" id="user-input">
            <p>
                <label>Initial Investment</label>
                <input 
                type = "number" 
                required 
                value = {enteredValue.initialInvestment}
                onChange = {(event) => handleInputValues('initialInvestment', event.target.value)} />
                <label>Annual Investment</label>
                <input 
                type = "number" 
                required
                value = {enteredValue.annualInvestment}
                onChange = {(event) => handleInputValues('annualInvestment', event.target.value)} />
            </p>

            <p>
                <label>Expected Return</label>
                <input 
                type="number" 
                required
                value = {enteredValue.expectedReturn}
                onchange = {(event) => handleInputValues('expectedReturn', event.target.value)} />
                <label>Duration</label>
                <input 
                type="number" 
                required
                value = {enteredValue.duration}
                onChange = {(event) => handleInputValues('duration', event.target.value)} />
            </p>
        </form>
    )
}