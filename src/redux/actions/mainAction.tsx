// Const
import * as actionTypes from '../constants/actionTypes';

// Modules
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export function setNewTheme(value: boolean) {
  return {
    type: actionTypes.CHANGE_THEME,
    value
  };
}

export function changeTheme(value: boolean) {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
    try {
      dispatch(setNewTheme(value))
    } catch (e) {
      console.log(e)
    }
  }
}