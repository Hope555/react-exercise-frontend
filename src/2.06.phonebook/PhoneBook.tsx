import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
import { PersonProps } from './type';
import { personService } from './services';

const PhoneBook = () => {
  const [persons, setPersons] = useState([] as PersonProps[]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newNotification, setNotification] = useState({type: '', message: ''});

  useEffect(() => {
    personService.getAll().then((data: PersonProps[]) => {
      setPersons(data);
    });
  }, []);

  const addPerson = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPerson: PersonProps = {
      name: newName,
      number: newNumber,
    };
    const found = persons.find(person => person.name === newName);
    if (found) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService.update(found.id as number, newPerson).then((data: PersonProps) => {
          helper.toggleNotification('success', `Added ${newName}`);
          setPersons(persons.map(person => {
            if (person.id === data.id) {
              return data;
            } else {
              return person;
            }
          }));
          setNewName('');
          setNewNumber('');
        });
      }
    } else {
      personService.create(newPerson).then((data: PersonProps) => {
        helper.toggleNotification('success', `Added ${newName}`);
        setPersons(persons.concat(data));
        setNewName('');
        setNewNumber('');
      });
    }
  };

  const deletePerson = (deletePerson: PersonProps) => {
    if (window.confirm(`Delete ${deletePerson.name}?`)) {
      personService
        .delete(deletePerson.id as number)
        .then(() => {
          setPersons(persons.filter(person => person.id !== deletePerson.id));
        })
        .catch(() => {
          helper.toggleNotification('error', `${deletePerson.name} does not exist in server`)
        });
    }
  };

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };
  
  const numberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewNumber(event.target.value);
  };
  
  const filterChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewFilter(event.target.value);
  };

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const helper = {
    toggleNotification: (type: string, message: string) => {
      setNotification({
        type: type,
        message: message,
      })
      setTimeout(() => {
        setNotification({
          type: '',
          message: '',
        })
      }, 5000)
    },
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={newNotification.type} message={newNotification.message}></Notification>
      <Filter
        newFilter={newFilter}
        filterChangeHandler={filterChangeHandler}
      ></Filter>
      <h2>add a new</h2>
      <PersonForm
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newNumber={newNumber}
        numberChangeHandler={numberChangeHandler}
        addPerson={addPerson}
      ></PersonForm>
      <h2>Numbers</h2>
      <Person
        personsToShow={personsToShow}
        deletePerson={deletePerson}
      ></Person>
    </div>
  )
}

export default PhoneBook