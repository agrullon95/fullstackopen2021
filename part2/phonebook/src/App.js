import React, { useState } from 'react'
import Contacts from './Contacts.js';
import PersonForm from './PersonForm.js';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456' , id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ])
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const addNewName = (e) => {
    e.preventDefault();
    if (!persons.find(person => person.name === newName)) {
      if (newName === '' || newPhoneNumber === '') return;
      setPersons(persons.concat(
        {
          name: newName,
          id: persons.length + 1,
          phoneNumber: newPhoneNumber
        }
      ));
      setNewName('');
      setNewPhoneNumber('')
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const setNewNameInput = (e) => {
    setNewName(e.target.value);
  }

  const setNewPhoneNumberInput = (e) => {
    setNewPhoneNumber(e.target.value);
  }

  
  const setNewFilterValue = (e) => {
    setNewFilter(e.target.value);
  }
  
  const Filter = ({ setNewFilterValue, newFilter}) => {
    return (
    <p>filter shown with <input onChange={setNewFilterValue} value={newFilter} /></p>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilterValue={setNewFilterValue} newFilter={newFilter} />
      <h3>Add a new</h3>
      <PersonForm setNewNameInput={setNewNameInput}
         newName={newName}
        setNewPhoneNumberInput={setNewPhoneNumberInput}
        newPhoneNumber={newPhoneNumber}
        addNewName={addNewName}
        />
      <h3>Numbers</h3>
      <Contacts personsList={persons} newFilter={newFilter} />
    </div>
  )
}

export default App