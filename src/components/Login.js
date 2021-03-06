import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import UserLogin from './users/UserLogin';
import OrgLogin from './organizations/OrgLogin';

import { LoginRegisterBody, ContainerStyled } from '../styling/loginRegistrationStyles';


const Login = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    
    return (
        
        <LoginRegisterBody>
            <ContainerStyled>
                <h3>Log In</h3>
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
                            <UserLogin props={props} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <OrgLogin props={props} />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
            <p>Still need to sign up? <Link to='/register'>Register Here</Link></p>
            </ContainerStyled>
        </LoginRegisterBody>
    )
}

export default Login