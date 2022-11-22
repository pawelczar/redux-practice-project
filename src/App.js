import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'

import { useSelector } from 'react-redux'

function App() {
  const logged = useSelector((state) => state.login.isLogged)

  return (
    <Layout>
      {logged && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
