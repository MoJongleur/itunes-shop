import * as actionTypes from '../constants/actionTypes';

interface reduceAction {
  type: string
}

function reducer( state: {theme:boolean} = {theme: false}, action: reduceAction ) {
  switch(action.type) {
    case actionTypes.CHANGE_THEME: return { ...state, theme: !state.theme };

    default: return state;
  }
}

export default reducer;