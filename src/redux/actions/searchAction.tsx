// Const
import * as actionTypes from '../constants/actionTypes';

// Modules
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import axios from 'axios';

const endpoint = 'https://itunes.apple.com/search';

interface IncomingData {
  results: Array<{
    collectionName: string
    collectionPrice: number,
    currency: string,
    description: string,
    previewUrl: string,
    releaseDate: string,
    collectionViewUrl: string,
    artworkUrl30: string
  }>
}

export function setRequestInProcess() {
  return {
    type: actionTypes.SET_REQUEST_IN_PROCESS
  };
}

export function setRequestEnded(searchString:string, data:IncomingData) {
  return {
    type: actionTypes.SET_REQUEST_ENDED,
    data: data.results,
    searchString
  };
}

export function setLoadMoreEnded(searchString:string, data:IncomingData) {
  return {
    type: actionTypes.SET_REQUEST_LOAD_MORE_ENDED,
    data: data.results,
    searchString
  };
}

export function setRequestError(error: any) {
  return {
    type: actionTypes.SET_REQEUST_ERROR
  };
}

export function searchAsync(searchString: string) {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setRequestInProcess());
      const response = await axios.get(endpoint, {params: {term: searchString, limit: 20}}).then((r) => r.data);
      dispatch(setRequestEnded(searchString, response))
    } catch(err) {
      dispatch(setRequestError(err))
    }
  }
}

export function loadMoreAsync(searchString: string, offset?: number) {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setRequestInProcess());
      const response = await axios.get(endpoint, {params: {term: searchString, limit: 20, offset: offset}}).then((r) => r.data);
      dispatch(setLoadMoreEnded(searchString, response))
    } catch(err) {
      dispatch(setRequestError(err))
    }
  }
}