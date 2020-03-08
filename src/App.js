import React, {useState} from 'react';
import './App.css';
import { Route } from 'react-router';

import { UserCredentialContext } from './contexts/UserCredentialContext';
import { OrgCredentialContext } from './contexts/OrgCredentialContext';
import PrivateRoute from './utils/PrivateRoute.js';

import Header from './components/Header.js';
// import Homepage from './components/Homepage.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import UserDashboard from './components/users/user-dash/UserDashboard.js';
import OrgDashboard from './components/organizations/org-dash/OrgDashboard.js';
import CreateNewCampaign from './components/organizations/CreateNewCampaign.js';
import CampaignList from './components/campaigns/CampaignList';
import CampaignPage from './components/campaigns/CampaignPage';


function App() {
  const [user, setUser] = useState({
    username: '',
    user_id: null
  })
  const [org, setOrg] = useState({
    org_name: "",
    org_id: null
  })

  const estUser = user => {
    setUser(user)
  }

  const estOrg = org => {
    setOrg(org)
  }

  return (
    <div>
      <UserCredentialContext.Provider value={{ user, estUser}}>
      <OrgCredentialContext.Provider value={{ org, estOrg }}>
        <Header />

        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/user-dashboard/:id' component={UserDashboard} />
        <PrivateRoute path='/org-dashboard/:id' component={OrgDashboard} />
        <Route path='/create-campaign' component={CreateNewCampaign} />
        <Route path='/campaigns' component={CampaignList} />
        <Route path='/campaign/:cid' component={CampaignPage} />
      </OrgCredentialContext.Provider>
      </UserCredentialContext.Provider>
    </div>
  );
}

export default App;
