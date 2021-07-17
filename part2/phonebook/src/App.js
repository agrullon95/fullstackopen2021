import React, { useEffect, useState } from 'react'
import Contacts from './components/Contacts.js';
import PersonForm from './components/PersonForm.js';

import phonebookService from './services/phonebookService.js';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newFilter, setNewFilter] = useState('');
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const fetchPersonsHook = () => {
    phonebookService.getAllPhonebookEntries()
    .then(response => {
      setPersons(response);
    })
    .catch(error => console.log(error));
  }

  useEffect(fetchPersonsHook, []);

  const addNewName = (e) => {
    e.preventDefault();
    var existingPersonEntry = persons.find(person => person.name === newName);
    if (existingPersonEntry) {
      const updatedPerson = {...existingPersonEntry, number: newPhoneNumber};
      var result = window.confirm(`${existingPersonEntry.name} is already added to phonebook, replace the old number with a new one?`);
      if (result) {
        updatePhoneBookEntry(existingPersonEntry.id, updatedPerson);
      }    
    } else if (!existingPersonEntry) {
      if (newName === '' || newPhoneNumber === '') return;
      const newPerson = {
        name: newName,
        number: newPhoneNumber
      }
      phonebookService.addPhonebookEntry(newPerson).then(response => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewPhoneNumber('')
      }).catch( error => {
        console.log(error);
      })
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const deletePhoneBookEntry = id => {
    phonebookService.deletePhoneBookEntry(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
    }).catch(error => console.log(error));
  }

  const updatePhoneBookEntry = (id, updatedEntry) => {
    phonebookService.updatePhoneBookEntry(id, updatedEntry).then(() => {
      setPersons(persons.map(person => person.id !== id ? person: updatedEntry))
    })
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
      <Contacts 
        personsList={persons}
        newFilter={newFilter} 
        deletePhoneBookEntry={deletePhoneBookEntry}
         />
    </div>
  )
}

export default App