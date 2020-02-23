import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import UserRegister from './users/UserRegister';
import OrgRegister from './organizations/OrgRegister';

import { LoginRegisterBody, ContainerStyled } from '../styling/loginRegistrationStyles';

const Register = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <LoginRegisterBody>
            <ContainerStyled>
                <h3>Register an account</h3>
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
                                <UserRegister />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <OrgRegister />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <p>Already signed up? <Link to='/login'>Log in Here</Link></p>
            </ContainerStyled>
        </LoginRegisterBody>
    )
};

export default Register;