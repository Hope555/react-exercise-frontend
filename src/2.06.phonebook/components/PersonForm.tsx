import React, { ChangeEventHandler, FormEventHandler } from 'react'

interface PersonFormProps {
  newName: string,
  nameChangeHandler: ChangeEventHandler<HTMLInputElement>
  newNumber: string,
  numberChangeHandler: ChangeEventHandler<HTMLInputElement>
  addPerson: FormEventHandler<HTMLFormElement>,
}

const PersonForm = ({newName, nameChangeHandler, newNumber, numberChangeHandler, addPerson} : PersonFormProps) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={nameChangeHandler} />
      </div>
      <div>
        number: <input value={newNumber} onChange={numberChangeHandler} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;