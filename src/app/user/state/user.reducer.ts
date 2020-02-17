import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActionsType } from './user.actions';

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}

const initialState: UserState = {
  maskUserName: true,
  currentUser: null
};
// selector functions
const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);

export function reducer(state= initialState, action) {
  switch (action.type) {
    case UserActionsType.MarkUserName:
      return {
        ...state,
        markUserName: action.payload
      };
    default:
      return state;
  }
}
