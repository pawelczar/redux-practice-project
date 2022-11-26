import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

import { useSelector } from 'react-redux'

const Cart = (props) => {
  const cart = useSelector((state) => state.cart)
  const cartItemsAmount = cart.length
  const totalPrice = cartItemsAmount * 6

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {!cartItemsAmount ? (
          ''
        ) : (
          <CartItem
            item={{
              title: `${cart[0].product} Item`,
              quantity: cartItemsAmount,
              total: totalPrice,
              price: 6,
            }}
          />
        )}
      </ul>
    </Card>
  )
}

export default Cart
