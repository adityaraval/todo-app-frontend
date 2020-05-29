import styled from 'styled-components';
import {
  Nav,
  Navbar,
  Container,
  Button,
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

export const SubmitButton = styled(Button)`
    background-color:${colors.BrandBlue};
    color:${colors.BrandWhite}
    border:0;
`;

export const FormContainer = styled.div`
    background-color: ${colors.BrandBackground};
    padding: 32px;
    border-radius:5px;
`;

export const TodoPageContainer = styled(Container)`
    background-color: ${colors.BrandBackground};
    padding: 32px;
    border-radius:5px;
`;
