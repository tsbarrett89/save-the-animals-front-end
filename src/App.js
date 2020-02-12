import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router';

import { CredentialsContext } from './contexts/CredentialsContext';


function App() {
  const emptyUser = {
    username: '',
    user_id: null
  }
  const [user, setUser] = useState('emptyUser')


  return (
    <div className="App">
    </div>
  );
}

export default App;
