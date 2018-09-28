import Client, { Graphql } from 'react-cf-graphql-client';

export const FETCH = 'FETCH';
export const RECEIVE_DATA = 'RECEIVE_DATA';
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
function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data,
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
    }
  `,
}).then(result => dispath(receiveData(result.data.coreNavigationMain)));
