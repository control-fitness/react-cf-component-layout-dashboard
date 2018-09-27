import Client, { Graphql } from 'react-cf-graphql-client';

export const FETCH = 'FETCH';


export const RECEIVE_DATA = 'RECEIVE_DATA';
function receiveData(data) {
  return {
    type: RECEIVE_DATA,
    data,
  };
}

export const fetchMain = (dispath) => {
  return Client.query({
    query: Graphql`
      {
        coreNavigationMain {
          name
          path
        }
      }
    `,
  }).then(result => dispath(receiveData(result.data.coreNavigationMain)));
};
