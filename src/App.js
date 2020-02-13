import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router';

import { CredentialContext } from './contexts/CredentialsContext';

import Header from './components/Header.js';
import Login from './components/Login.js';
import Navigation from './components/Navigation.js';
import CampaignList from './components/campaigns/CampaignList';


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
        <Header />
        <Navigation />
        <Login />
        <CampaignList />
      </CredentialContext.Provider>
    </div>
  );
}

export default App;
