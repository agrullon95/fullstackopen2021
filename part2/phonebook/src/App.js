import React, { useEffect, useState } from 'react'
import Contacts from './Contacts.js';
import PersonForm from './PersonForm.js';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const personsAPI = 'http://localhost:3001/persons';


  const fetchPersonsHook = () => {
    axios
      .get(personsAPI)
      .then(response => {
        setPersons(response.data);
      })
  }

  useEffect(fetchPersonsHook, []);

  const addNewName = (e) => {
    e.preventDefault();
    if (!persons.find(person => person.name === newName)) {
      if (newName === '' || newPhoneNumber === '') return;
      setPersons(persons.concat(
        {
          name: newName,
          id: persons.length + 1,
          number: newPhoneNumber
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