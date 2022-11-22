import { login, logout } from '../../feautures/isLoggedSlice'
import { useDispatch, useSelector } from 'react-redux'

import classes from './CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const isLogged = useSelector((state) => state.login.isLogged)

  const loginHandler = () => (isLogged ? dispatch(logout()) : dispatch(login()))

  return (
    <button onClick={loginHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  )
}

export default CartButton
