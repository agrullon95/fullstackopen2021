import React from 'react';

const Contact = ({ person }) => <p>{person.name} {person.phoneNumber} </p>

const Contacts = ({ personsList, newFilter}) => {
    return (
        <div>
            {personsList.filter(person => person.name.toLowerCase().includes(newFilter)).map(
                person => <Contact key={person.id} person={person} />
            )}
        </div>
    )
}

export default Contacts;