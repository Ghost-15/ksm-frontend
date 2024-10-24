import {useContext} from 'react'
import { AppContext } from '../auth/AppProvider.js'
import {Link} from "react-router-dom";

const Cart = () => {

  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(AppContext)

    const handleRemoveFromCart = (product) => {
        removeFromCart(product)
    }

  return (
      <main className="h-screen">
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Panier</h1>

          <div className="mt-5 flex flex-col gap-4">
              {cartItems.map((item) => (
                  <div className="flex justify-between items-center" key={item.id}>
                      <div className="flex gap-4">
                          <img src={item.picture_url} alt={item.name} className="rounded-md w-24 h-24" />
                          <div className="flex gap-8 justify-center">
                              <h1 className="text-lg font-bold">{item.name}</h1>
                              <p className="text-gray-600">{item.prix} FCFA HT</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                              onClick={() => {
                                  addToCart(item)
                              }}>
                              +
                          </button>
                          <p>{item.quantity}</p>
                          <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                              onClick={() => {
                                  const cartItem = cartItems.find((product) => product.id === item.id);
                                  if (cartItem.quantity === 1) {
                                      handleRemoveFromCart(item);
                                  } else {
                                      removeFromCart(item);
                                  }}}>
                              -
                          </button>
                      </div>
                  </div>
              ))}
          </div>
          {cartItems.length > 0 ? (
                  <div className="mt-5 flex flex-col justify-between items-center">
                      <h1 className="text-lg font-bold">Total: {getCartTotal()} FCFA HT</h1>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                      <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                          onClick={() => {
                              clearCart()
                          }}>
                          Vider le panier
                      </button>
                      <Link to="/validation">
                          <button className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                              valider la commande
                          </button>
                      </Link>
                      </div>
                  </div>
              ) : (
                  <h1 className="text-center text-xl font-bold leading-9 tracking-tight text-red-600">Votre panier est vide</h1>
              )
          }
      </div>
  </main>
  );
};

export default Cart;

