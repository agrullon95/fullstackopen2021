import React from 'react';

const PersonForm = ({ setNewNameInput , newName, setNewPhoneNumberInput, newPhoneNumber, addNewName}) => {

    return (
        <form>
            <div>
                name: <input onChange={setNewNameInput} value={newName} />
            </div>
            <div>
                number: <input onChange={setNewPhoneNumberInput} value={newPhoneNumber} />
            </div>
            <div>
                <button onClick={addNewName} type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm;