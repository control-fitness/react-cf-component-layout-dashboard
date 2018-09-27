import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import { Provider } from 'react-redux';
import Navigation from '../containers/Navigation';
import { fetchMain } from '../actions';
import store from '../store';

const NavigationMain = function Base(props) {
  const { location, children } = props;

  // Fetch main menu
  fetchMain(store.dispatch);

  // Return components
  return (
    <Provider store={store}>
      <Container fluid>
        <Navigation location={location} />
        {children}
      </Container>
    </Provider>
  );
};

NavigationMain.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  children: PropTypes.element.isRequired,
};

export default NavigationMain;
