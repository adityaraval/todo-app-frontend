import React from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import UpdateProfile from '../components/UpdateProfile';
import ChangePassword from '../components/ChangePassword';


const UserPage = ({
  updateProfile, getCurrentUser, changePassword, currentUser,
}) => (
  <>
    <Container>
      <Row>
        <Col>
          <UpdateProfile
            updateProfile={updateProfile}
            currentUser={currentUser}
            getCurrentUser={getCurrentUser}
          />
        </Col>
        <Col>
          <ChangePassword
            changePassword={changePassword}
            currentUser={currentUser}
          />
        </Col>
      </Row>
    </Container>
  </>
);


export default UserPage;
