// @flow
import { SET_USER } from '../actions/user';

export type userStateType = {
  +id?: number,
  +nickname?: string,
  teams?: Array<{
    id: numer,
    name: string
  }>
};

type userActionType = {
  +type: string,
  +payload?: userStateType
};

const initialState: userStateType = {}

export default function user(state: userStateType = initialState, action: userActionType) {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };
    default:
      return state;
  }
}
