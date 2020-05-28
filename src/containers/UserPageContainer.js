import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserPage from '../pages/UserPage';

import {
  updateProfile,
  changePassword,
  getCurrentUser,
} from '../redux/actions/userActions';

import {
  selectCurrentUser,
} from '../redux/selectors/userSelectors';

function mapDispatchToProps(dispatch) {
  return {
    updateProfile: (userObj) => dispatch(updateProfile(userObj)),
    changePassword: (userObj) => dispatch(changePassword(userObj)),
    getCurrentUser: () => dispatch(getCurrentUser()),
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
