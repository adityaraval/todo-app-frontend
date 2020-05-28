import React from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const HomePage = ({ signup, login }) => (
  <>
    <Container>
      <Row>
        <Col>
          <SignupForm signup={signup} />
        </Col>
        <Col>
          <LoginForm login={login} />
        </Col>
      </Row>
    </Container>
  </>
);


export default HomePage;
