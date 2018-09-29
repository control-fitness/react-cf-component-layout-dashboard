import { connect } from 'react-redux';
import Profile from '../components/Profile';
import { profileLogout } from '../actions';

const mapStateToProps = state => ({
  name: state.api.user.name,
  email: state.api.user.email,
  logout: state.profile.logout,
});

const mapDispatchToProps = dispatch => ({
  onLogout: (logout) => {
    dispatch(profileLogout(logout));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
