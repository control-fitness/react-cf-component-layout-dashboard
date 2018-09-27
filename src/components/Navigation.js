import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Image,
} from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import Items from './Items';

const Navigation = ({ list }) => (
  <Menu icon="labeled">
    <Menu.Item>
      <Image
        verticalAlign="middle"
        src={Cdn.image('logo-text-296-40.svg')}
        size="small"
      />
    </Menu.Item>
    <Menu.Menu position="right">
      <Items list={list} location={location} />
    </Menu.Menu>
  </Menu>
);

Navigation.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Navigation;
