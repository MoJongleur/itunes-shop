// Modules
import React from 'react';
import { useDispatch } from 'react-redux';

// classes
import Style from './style';

// SVG
import cart from '../../assets/shopping-cart.svg';

// Actions
import { moveToCart } from '../../redux/actions/cartAction';

// Components
import CartItem from '../cartItem/index';

// Interface
import { Element } from '../../interface/index';

interface ListProps {
  list: Array<Element>,
  bookmarks: Array<Element>,
}

function ListContainer({list}: ListProps) {
  const dispatch = useDispatch();

  function handleClick(i: number): any {
    dispatch(moveToCart(list[i]))
  }

  const classes = Style();

  return(
    <div className={classes.listContainer}>
      {
        list.map((el: Element, i: number) => (
          <React.Fragment key={i}>
            <CartItem el={el} i={i} handle={handleClick} icon={cart} />
          </React.Fragment>
        ))
      }
    </div>
  )
}

export default ListContainer;