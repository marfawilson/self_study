export default function UserInputs() {
    return (
        <form className="input-group" id="user-input">
            <p>
                <label>Initial Investment<input type="number"></input></label>
                <label>Annual Investment<input type="number"></input></label>
            </p>

            <p>
                <label>Expected Return<input type="number"></input></label>
                <label>Duration<input type="number"></input></label>
            </p>
        </form>
    )
}