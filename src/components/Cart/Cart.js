import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'

import { useSelector } from 'react-redux'

const Cart = (props) => {
  const cart = useSelector((state) => state.cart)
  const cartItemsAmount = cart.length

  console.log(cart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {!cart ? (
          ''
        ) : (
          <CartItem
            item={{
              title: 'Test Item',
              quantity: cartItemsAmount,
              total: 18,
              price: 6,
            }}
          />
        )}
      </ul>
    </Card>
  )
}

export default Cart
