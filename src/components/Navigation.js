import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu, Image, Button, Responsive,
} from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import Items from './Items';
import Profile from './Profile';

const Navigation = ({
  list, user, show, location, toggle,
}) => (
  <Menu borderless compact fixed="top" fluid stackable>
    <Menu.Menu>
      <Responsive as={Menu.Item} {...Responsive.onlyMobile}>
        <Button
          basic
          color="blue"
          icon="bars"
          onClick={toggle}
        />
        <Image
          centered
          verticalAlign="middle"
          src={Cdn.image('logo-text-296-40.svg')}
          size="small"
        />
      </Responsive>
      <Responsive as={Menu.Item} minWidth={768}>
        <Image
          verticalAlign="middle"
          src={Cdn.image('logo-text-296-40.svg')}
          size="small"
        />
      </Responsive>
    </Menu.Menu>
    {show
        && (
          <Responsive as={Menu.Menu} {...Responsive.onlyMobile} position="right">
            <Items list={list} location={location} toggle={toggle} />
          </Responsive>
        )
    }
    <Responsive as={Menu.Menu} minWidth={768} position="right">
      <Items list={list} location={location} />
      <Profile name={user.name} email={user.email} />
    </Responsive>
  </Menu>
);

Navigation.defaultProps = {
  location: {},
};

Navigation.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  location: PropTypes.objectOf(PropTypes.string),
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Navigation;
