import React, { ChangeEvent, useState } from 'react';
import {nanoid} from 'nanoid'
import './App.css';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import { IFormUser, IUser } from './models/intefaces';


function App() {
  const [allUsers, setAllUsers] = useState([] as IUser[])
  const [user, setUser] = useState({} as IFormUser)

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')!;
    const fieldValue = event.target.value;

    const newUserData = {...user};
    switch(fieldName){
      case 'phone':
        newUserData.phone = fieldValue;
        break;
      case 'firstname':
        newUserData.firstname = fieldValue;
        break
      case 'lastname':
        newUserData.lastname = fieldValue;
        break
      case 'dateofbirth':
        newUserData.dateofbirth = fieldValue;
        break
      case 'email':
        newUserData.email = fieldValue;
        break  
    }

    setUser(newUserData)
  }

  const submitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const newUser: IUser = {
      id: nanoid(),
      name: user.firstname + " " + user.lastname,
      dateofbirth: user.dateofbirth,
      email: user.email,
      phone: user.phone
    }

    const newUsers = [...allUsers, newUser]
    setAllUsers(newUsers)
  }

  const deleteHadler = (userId: string) => {
    const users = [...allUsers]
    const index = allUsers.findIndex(user => user.id === userId)

    users.splice(index, 1)
    setAllUsers(users)
  }

  return (
    <div className="App">
      <h1>Contacts' book</h1>
        <Form 
          onSubmitHandler={submitHandler}
          onChangeHandler={changeHandler}
        />
        <Table 
          allUsers={allUsers}
          onDeleteHadler={deleteHadler}
        />
    </div>
  );
}

export default App;
