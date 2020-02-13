import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router';

import { CredentialContext } from './contexts/CredentialsContext';
import PrivateRoute from './utils/PrivateRoute.js';

import Header from './components/Header.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Dashboard from './components/dashboard/Dashboard.js';
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

        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/campaigns' component={CampaignList} />
      </CredentialContext.Provider>
    </div>
  );
}

export default App;
