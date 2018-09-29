import { connect } from 'react-redux';
import Logout from 'react-cf-component-account-user-logout';
import { profileLogout } from '../actions';

const mapStateToProps = state => ({
  open: state.profile.logout,
});

const mapDispatchToProps = dispatch => ({
  onClose: (logout) => {
    dispatch(profileLogout(logout));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
