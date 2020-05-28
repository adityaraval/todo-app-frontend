import React, {
  useEffect,
} from 'react';
import Avatar from 'react-avatar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import {
  Nav,
  Navbar,
} from 'react-bootstrap';

import colors from '../utils/theme';


// navbar
export const CustomNavBar = styled(Navbar)`
  background-color:${colors.BrandBlack};
`;

export const Brand = styled(Navbar.Brand)`
  color:${colors.BrandWhite};
  font-family: 'Nunito', sans-serif;
  font-size:24px;
  font-weight: 600;
    &:hover {
      color:${colors.BrandWhite};
      text-decoration:none;
  }
`;

export const StyledLink = styled(Nav.Link)`
  color:${colors.BrandWhite};
  font-size:14px;
  font-weight:500;
  margin-right:10px;
  margin-left:10px;
    &:hover {
        color:${colors.BrandWhite};
        text-decoration:none;
    }
`;


// render profile picture for logged in user
const renderLoggedInUserPicture = (currentUser, logout) => {
  if (currentUser && currentUser.id) {
    return (
      <Nav className="align-items-center">
        <StyledLink as={Link} to="/todo">Todo Management</StyledLink>
        <StyledLink as={Link} to="/profile">Profile Management</StyledLink>
        <Avatar
          size="30"
          round
          name={currentUser.name}
        />
        <StyledLink as={Link} to="/profile">
          {currentUser.name}
        </StyledLink>
        <StyledLink as={Link} onClick={logout} to="/">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </StyledLink>
      </Nav>
    );
  }
  return null;
};

const NavBar = (props) => {
  const {
    logout,
    getCurrentUser,
    currentUser,
  } = props;

  useEffect(() => {
    if (!currentUser || !currentUser.id) {
      getCurrentUser();
    }
  }, [currentUser]);

  return (
    <CustomNavBar sticky="top">
      <Brand as={Link} to="/">
        Todo App
      </Brand>
      <CustomNavBar.Collapse className="justify-content-end">
        {
          renderLoggedInUserPicture(currentUser, logout)
        }
      </CustomNavBar.Collapse>
    </CustomNavBar>
  );
};

export default NavBar;
