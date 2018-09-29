import Client, { Graphql } from 'react-cf-graphql-client';

export const PROFILE_LOGOUT = 'PROFILE_LOGOUT';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const RECEIVE_USER = 'RECEIVE_USER';
export const TOGGLE = 'TOGGLE';

/**
 * Toogle button state
 */
export const toggle = () => ({
  type: TOGGLE,
});

/**
 * Set received data to state list
 * @param {*} data
 */
function receiveList(data) {
  return {
    type: RECEIVE_LIST,
    data,
  };
}

/**
 * Set received data to state user
 * @param {*} data
 */
function receiveUser(data) {
  return {
    type: RECEIVE_USER,
    data,
  };
}

/**
 * Set true/false to state openLogout
 * @param {*} data
 */
export function profileLogout(logout) {
  return {
    type: PROFILE_LOGOUT,
    logout,
  };
}

/**
 * Get main data
 * @param {*} dispath
 */
export const fetchMain = dispath => Client.query({
  query: Graphql`
    {
      coreNavigationMain {
        name
        path
      }
      accountUserMe {
        name
        email
      }
    }
  `,
}).then((result) => {
  dispath(receiveList(result.data.coreNavigationMain));
  dispath(receiveUser(result.data.accountUserMe));
});
