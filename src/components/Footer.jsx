import './Footer.css'
import { useFilters } from '../hooks/useFilters'
import { useCart } from '../hooks/useCart'

export function Footer () {
  // const { filters } = useFilters()

  const { cart } = useCart()

  const { filters } = useFilters()

  return (
    <footer className='footer'>
      <p>Filters state: {JSON.stringify(filters, null, 2)}</p>
      <p>Cart state: {JSON.stringify(cart, null, 2)}</p>
      {/* <h4>Prueba técnica de React ⚛️ － <span>@midudev</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
    </footer>
  )
}
