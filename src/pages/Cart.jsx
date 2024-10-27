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
          <h1 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Panier</h1>
          <div className="mt-5 grid justify-items-center">
              <div className="shadow-2xl bg-gray-400">
          {cartItems.map((item) => (
              <table className="w-full text-sm text-gray-500" key={item.id}>
              <thead className="text-xs text-gray-800 uppercase bg-gray-400">
                  <tr>
                      <th scope="col" className="px-16 py-3">
                          <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Produit
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Quantite
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Prix
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr className="bg-gray-800 border-b">
                      <td className="p-4">
                          <img src={item.picture_url} className="w-16 md:w-32 max-w-full max-h-full"
                               alt="picture"/>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white">
                          {item.name}
                      </td>
                      <td className="px-6 py-4">
                          <div className="flex items-center">
                              <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                      onClick={() => {
                                          const cartItem = cartItems.find((product) => product.id === item.id);
                                          if (cartItem.quantity === 1) {
                                              handleRemoveFromCart(item);
                                          } else {
                                              removeFromCart(item);
                                          }}}>
                                  <span className="sr-only">Quantity button</span>
                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 18 2">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2" d="M1 1h16"/>
                                  </svg>
                              </button>
                              <div>
                                  <p className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1">
                                      {item.quantity}</p>
                              </div>
                              <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                                      onClick={() => {
                                  addToCart(item)
                              }}>
                                  <span className="sr-only">Quantity button</span>
                                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                       viewBox="0 0 18 18">
                                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="2" d="M9 1v16M1 9h16"/>
                                  </svg>
                              </button>
                          </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-white">
                          {item.prix} FCFA HT
                      </td>
                  </tr>
                  <tr className="bg-gray-400 border-b text-lg font-bold text-gray-800">
                      <td className="p-4">
                          Total de la commande: {getCartTotal()} FCFA HT
                      </td>
                  </tr>
                  </tbody>
                  </table>
          ))}
              </div>
              <div className="text-xs text-gray-800 uppercase">
                  {cartItems.length > 0 ? (
                      <div className="flex flex-col justify-between items-center">
                          {/*<h1 className="text-lg font-bold">Total: {getCartTotal()} FCFA HT</h1>*/}
                          <div className="mt-5 grid grid-cols-2 gap-2">
                              <button className="px-4 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-red-600 focus:outline-none focus:bg-gray-700"
                                      onClick={() => {
                                          clearCart()
                                      }}>
                                  Vider le panier
                              </button>
                              <Link to="/validation">
                                  <button className="px-4 py-2 bg-blue-500 text-white text-xs font-bold uppercase rounded hover:bg-blue-600 focus:outline-none focus:bg-gray-700">
                                      valider la commande
                                  </button>
                              </Link>
                          </div>
                      </div>
                  ) : (
                      <h1 className="text-center text-xl font-bold leading-9 tracking-tight text-red-600">Votre panier est vide</h1>
                  )}
              </div>
      </div>
  </main>
  );
};

export default Cart;

