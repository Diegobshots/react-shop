import './Products.css'

import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className='products pt-8'>
      <ul>
        {products.map((product) => {
          const isProductInCart = checkProductInCart(product)
          // return (
          //   <li key={product.id}>
          //     <img src={product.thumbnail} alt={product.title} />

          //     <div>
          //       <strong>{product.title}</strong> - ${product.price}
          //     </div>
          //     <div>

          //       <button
          //         style={{ backgroundColor: isProductInCart ? 'red' : '' }} onClick={() => {
          //           !isProductInCart
          //             ? addToCart(product)
          //             : removeFromCart(product)
          //         }}
          //       >
          //         {
          //           !isProductInCart
          //             ? <AddToCartIcon />
          //             : <RemoveFromCartIcon />
          //         }
          //       </button>

          //     </div>
          //   </li>
          // )

          return (
            <li key={product.id}>
              <a
                className='group relative block overflow-hidden rounded-lg'
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className='h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72'
                />

                <div className='relative  bg-gray-800 p-6'>
                  <h3 className='mt-4 text-lg font-medium text-white-900'>
                    {product.title}
                  </h3>

                  <p className='mt-1.5 text-sm text-gray-400 mb-4'>$14.99</p>

                  <button
                    onClick={() => {
                      !isProductInCart
                        ? addToCart(product)
                        : removeFromCart(product)
                    }}
                    className={` 
                    ${!isProductInCart ? 'bg-blue-500' : 'bg-red-400'} 
                    flex justify-around items-center w-full rounded bg-blue-500 p-4 text-sm font-medium 
                    transition hover:scale-105`}
                  >
                    {!isProductInCart
                      ? (
                        <>
                          <span>Add to cart</span>
                          <AddToCartIcon />
                        </>
                        )
                      : (
                        <>
                          <span>Remove from cart</span>
                          <RemoveFromCartIcon />
                        </>
                        )}
                  </button>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
