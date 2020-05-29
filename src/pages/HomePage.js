import React from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const HomePage = ({
  signup, login, isLoggingIn, isSigningUp,
}) => (
  <>
    <Container>
      <Row>
        <Col>
          <SignupForm
            signup={signup}
            isSigningUp={isSigningUp}
          />
        </Col>
        <Col>
          <LoginForm
            login={login}
            isLoggingIn={isLoggingIn}
          />
        </Col>
      </Row>
    </Container>
  </>
);


export default HomePage;
