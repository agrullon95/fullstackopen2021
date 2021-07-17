import React from 'react';

const Contact = ({ person, deletePhoneBookEntry }) => {

    const deleteEntry = person => {
        var result = window.confirm(`Delete ${person.name}?`);
        if (result) {
            deletePhoneBookEntry(person.id)
        }
    }

    return (
        <div>
            {person.name} {person.number} 
            <button onClick={() => deleteEntry(person)}>delete</button>
        </div>
    )
}

const Contacts = ({ personsList, newFilter, deletePhoneBookEntry}) => {
    return (
        <div>
            {personsList.filter(person => person.name.toLowerCase().includes(newFilter)).map(
                person => <Contact key={person.id} person={person} deletePhoneBookEntry={deletePhoneBookEntry}/>
            )}
        </div>
    )
}

export default Contacts;