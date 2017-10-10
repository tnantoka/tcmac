// @flow
import type { userStateType, userActionType } from '../reducers/user';
import API from '../utils/api';

export const SET_USER = 'SET_USER';

export function setUser(user: userStateType) {
  return {
    type: SET_USER,
    payload: user,
  };
}

export function fetchUser(token: string) {
  return (dispatch: (action: userActionType) => void) => {
    API.request(token, 'user', 'GET').then(({ id, nickname }) => {
      dispatch(setUser({ id, nickname }));
    });
  };
}
