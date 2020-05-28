import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NavBar from '../components/NavBar';

import {
  logout,
  getCurrentUser,
} from '../redux/actions/userActions';

import {
  selectCurrentUser,
} from '../redux/selectors/userSelectors';

function mapDispatchToProps(dispatch) {
  return {
    getCurrentUser: () => dispatch(getCurrentUser()),
    logout: () => dispatch(logout()),
  };
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
