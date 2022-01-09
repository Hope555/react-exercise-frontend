import React from 'react'
import { PersonProps } from '../type';

const Person = ({personsToShow, deletePerson} : {personsToShow: PersonProps[], deletePerson: any}) => {
  return (
    <>
      {personsToShow.map(person => 
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person)}>delete</button>
        </div>
      )}
    </>
  );
};

export default Person;