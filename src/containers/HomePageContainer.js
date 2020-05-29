import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../pages/HomePage';

import {
  signup,
  login,
} from '../redux/actions/userActions';

import {
  selectLoginLoader,
  selectSignupLoader,
} from '../redux/selectors/userSelectors';

function mapDispatchToProps(dispatch) {
  return {
    signup: (userObj) => dispatch(signup(userObj)),
    login: (userObj) => dispatch(login(userObj)),
  };
}

const mapStateToProps = createStructuredSelector({
  isSigningUp: selectSignupLoader,
  isLoggingIn: selectLoginLoader,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
