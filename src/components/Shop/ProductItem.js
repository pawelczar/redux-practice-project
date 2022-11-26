import Card from '../UI/Card'
import classes from './ProductItem.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCart } from '../../feautures/cartItmesSlice'

const ProductItem = (props) => {
  const { title, price, description } = props
  // const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const productPrice = price.toFixed(2)

  console.log(title)

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${productPrice}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() =>
              dispatch(addCart({ product: title, price: productPrice }))
            }
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
