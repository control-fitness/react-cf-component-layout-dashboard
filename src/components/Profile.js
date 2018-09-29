import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, Dropdown, Segment, Header,
} from 'semantic-ui-react';
import Cdn from 'react-cf-helper-cdn';
import { Link } from 'react-router-dom';

/**
 * Avatar
 * @param {String} avatar
 */
const Avatar = ({ url }) => (<Image avatar src={url} />);

const About = ({ url, name, email }) => (
  <Segment basic textAlign="center">
    <Image avatar src={url} size="tiny" />
    <Header as="h4">
      {name}
    </Header>
    <Header.Subheader>
      {email}
    </Header.Subheader>
  </Segment>
);

/**
 * Profile
 * @param {String} avatarUrl
 */
const Profile = ({
  avatarUrl, name, email, onLogout,
}) => {
  const trigger = <Avatar url={avatarUrl} />;
  return (
    <Dropdown item trigger={trigger}>
      <Dropdown.Menu>
        <Dropdown.Item
          as={Link}
          to="/account"
          text={(
            <About
              url={avatarUrl}
              name={name}
              email={email}
            />
          )}
        />
        <Dropdown.Divider />
        <Dropdown.Item
          onClick={() => onLogout(true)}
          icon="sign out"
          text="Cerrar sesión"
        />
      </Dropdown.Menu>
    </Dropdown>
  );
};

Profile.defaultProps = {
  avatarUrl: Cdn.image('avatar-default-80-80.svg'),
  name: '...',
  email: '...',
};

Profile.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
};

About.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Profile;
