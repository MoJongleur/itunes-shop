// Modules
import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Material
import { TextField, InputAdornment } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

// Action
import { searchAsync, loadMoreAsync } from '../../redux/actions/searchAction';

// Components
import ListContainer from '../../components/listContainer/index';

import Style from './style';

function Search() {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const select = useSelector((state: any) => state);
  const classes = Style();

  function handleOnSubmit(event: any) {
    if(event.key === 'Enter'){
      reactRequest()
    }
  }

  function reactRequest() {
    if(searchRef.current !== null) {
      dispatch(searchAsync(searchRef.current.value));
    }
  }

  function handleLoadMore() {
    dispatch(loadMoreAsync(select.search.searchString, select.search.offset));
  }

  return (
    <>
      <TextField
        id='search'
        label='Itunes search'
        onKeyPress={handleOnSubmit}
        className={classes.searchInput}
        type={'text'}
        inputRef={searchRef}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <div onClick={reactRequest}>
                <button>Search</button>
              </div>
            </InputAdornment>
          ),
        }}
      />
      <ListContainer list={select.search.list} bookmarks={select.cart.list} />
      {select.search.wait ? <CircularProgress /> : ''}
      {select.search.list.length > 0 ? <Button onClick={handleLoadMore} variant="contained" color="primary">Load more</Button> : ''}
    </>
  )
}

export default Search