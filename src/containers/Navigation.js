import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

const mapStateToProps = (state, ownProps) => ({
  list: state.api.list,
  location: ownProps.location,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
