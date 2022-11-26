import classes from './CartItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCart, removeCart } from '../../feautures/cartItmesSlice'

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item

  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => dispatch(removeCart())}>-</button>
          <button
            onClick={() => dispatch(addCart({ product: 'Test', price: 6 }))}
          >
            +
          </button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
