// Const
import * as actionTypes from '../constants/actionTypes';

// Modules
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export function setBookmarksError(error: any) {
  return {
    type: actionTypes.SET_REQEUST_ERROR
  };
}

export function moveTo(data: object) {
  return {
    type: actionTypes.MOVE_TO_CART,
    data
  };
}

export function moveFrom(idx: number) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    idx
  };
}

export function clear() {
  return {
    type: actionTypes.CLEAR_CART
  };
}


export function moveToCart(data: any) {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
    try {
      dispatch(moveTo(data))
    } catch(err) {
      dispatch(setBookmarksError(err))
    }
  }
}

export function moveFromCart(idx: number) {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
    try {
      dispatch(moveFrom(idx))
    } catch(err) {
      dispatch(setBookmarksError(err))
    }
  }
}

export function clearCart() {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): void => {
    try {
      dispatch(clear())
    } catch(err) {
      dispatch(setBookmarksError(err))
    }
  }
}