import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { toggle } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  list: state.api.list,
  show: state.form.show,
  location: ownProps.location,
});

const mapDispatchToProps = dispatch => ({
  toggle: () => {
    dispatch(toggle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
