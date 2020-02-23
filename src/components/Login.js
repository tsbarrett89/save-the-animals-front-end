import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import UserLogin from './users/UserLogin';
import OrgLogin from './organizations/OrgLogin';

import { LoginRegisterBody, FormStyled } from '../styling/loginRegistrationStyles';


const Login = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        
        <LoginRegisterBody>
            <FormStyled>
                <h3>Login</h3>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Supporter
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Organization
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <UserLogin />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="6">
                            <OrgLogin />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
            <p>Still need to sign up? <Link to='/register'>Register Here</Link></p>
            </FormStyled>
        </LoginRegisterBody>
    )
}

export default Login