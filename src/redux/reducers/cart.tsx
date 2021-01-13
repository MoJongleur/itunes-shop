import * as actionTypes from '../constants/actionTypes';

interface Element {
  etag: string,
  id: {videoId: string},
  kind: string,
  snippet: object
}

interface reduceState {
  list: Array<Element>,
  wait: boolean,
  error: string | object | null
}

interface reduceAction {
  data: {id: {videoId: string}},
  type: string,
  err: string | object | null,
  idx: number
}

function reducer( state: reduceState = {list:[],wait:false,error:null}, action: reduceAction ) {
  switch(action.type) {
    case actionTypes.MOVE_TO_CART: return { ...state, wait: false, error: action.err, list: [...state.list, action.data] };
    case actionTypes.REMOVE_FROM_CART: return { ...state, wait: false, error: action.err, list: [...state.list.slice(0, action.idx), ...state.list.slice(action.idx+1)]};
    case actionTypes.CLEAR_CART: return { ...state, wait: false, error: action.err, list: []};

    default: return state;
  }
}

export default reducer;