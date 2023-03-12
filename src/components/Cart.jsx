import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

function CartItem ({ product, addToCart, removeFromCart }) {
  return (
    <li key={product.id}>
      <img src={product.thumbnail} alt={product.title} />

      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <small>
          Ammount: {product.quantity}
        </small>
        <button onClick={addToCart}>+</button>
        <button onClick={removeFromCart}><RemoveFromCartIcon /></button>

      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckboxId} />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                product={product}
                removeFromCart={() => removeFromCart(product)}
              />
            ))
          }
        </ul>
        {
          cart.length > 0

            ? (
              <button onClick={clearCart}><ClearCartIcon /></button>
              )
            : (
              <p>Cart is empty</p>
              )
        }

      </aside>
    </>
  )
}
