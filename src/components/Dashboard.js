import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import Navigation from '../containers/Navigation';
import Logout from '../containers/Logout';
import { fetchMain } from '../actions';
import store from '../store';

const Dashboard = function Base(props) {
  const { location, children } = props;

  // Fetch main menu
  fetchMain(store.dispatch);

  // Return components
  return (
    <Provider store={store}>
      <Container fluid>
        <Logout />
        <Navigation location={location} />
        {children}
      </Container>
    </Provider>
  );
};

Dashboard.defaultProps = {
  location: {},
  children: null,
};

Dashboard.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string,
  }),
  children: PropTypes.node,
};

export default Dashboard;
