import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from '../pages/HomePage';

import {
  signup,
  login,
} from '../redux/actions/userActions';

import {
  selectCurrentUser,
} from '../redux/selectors/userSelectors';

function mapDispatchToProps(dispatch) {
  return {
    signup: (userObj) => dispatch(signup(userObj)),
    login: (userObj) => dispatch(login(userObj)),
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
