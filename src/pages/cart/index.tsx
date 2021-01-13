// Modules
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Material
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

// classes
import Style from '../../components/listContainer/style';

// SVG
import remove from '../../assets/remove.svg';

// Actions
import { moveFromCart, clearCart } from '../../redux/actions/cartAction';

// Components
import CartItem from '../../components/cartItem/index'

// Interface
import { Element } from '../../interface/index';

function Cart() {
  const dispatch = useDispatch();
  const select = useSelector((state: any) => state);

  function handleClick(i: number): any {
    dispatch(moveFromCart(i))
  }

  function handleClear(): any {
    dispatch(clearCart())
  }

  const classes = Style();

  return(
    <>
      <Button className={classes.clearButton} onClick={() => handleClear()}>Delete all items</Button>
      <div className={classes.listContainer}>
        {
          select.cart.list.map((el: Element, i: number) => (
            <React.Fragment key={i}>
              <CartItem el={el} i={i} handle={handleClick} icon={remove} />
            </React.Fragment>
          ))
        }
      </div>
      {select.cart.list.length > 0 ? <Divider className={classes.divider} /> : ''}
      {select.cart.list.length > 0 ? select.cart.list.map((el: Element) => el.collectionPrice).reduce((prev: number, current: number) => prev+current) : ''}
    </>
  )
}

export default Cart
