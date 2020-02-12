import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router';

import { CredentialContext } from './contexts/CredentialsContext';


function App() {
  const emptyUser = {
    username: '',
    user_id: null
  }
  const [user, setUser] = useState(emptyUser)

  const estUser = user => {
    setUser(user)
  }

  return (
    <div>
      <CredentialContext.Provider value={{ user, estUser}}>

      </CredentialContext.Provider>
    </div>
  );
}

export default App;
