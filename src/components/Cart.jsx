import './Cart.css'
import { useId, useEffect, useState } from 'react'
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
  const [animateCart, setAnimateCart] = useState(false)

  useEffect(() => {
    setAnimateCart(true)
    setTimeout(() => {
      setAnimateCart(false)
    }, 1000)
  }, [cart])

  return (
    <>
      <label htmlFor={cartCheckboxId} className={`cart-button fixed m-4 ${animateCart ? 'animate-bounce' : ''}`}>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckboxId} />

      <aside className='cart shadow-lg transition-all ease-in-out z-50'>
        <ul className='mt-16'>
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
              <p className='text-xl pt-8'>Cart is empty</p>
              )
        }

      </aside>
    </>
  )
}
