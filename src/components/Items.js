import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import I18n from 'react-cf-helper-i18n';

const Items = ({ list, location }) => {
  if (list.length > 0) {
    const items = list.map(item => (
      <Menu.Item
        as={Link}
        to={item.path}
        key={item.path}
        active={item.path === location.pathname}
        name={item.name}
      >
        {I18n.t(`modules.${item.name}`)}
      </Menu.Item>
    ));

    return items;
  }
  return null;
};

Items.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Items;
