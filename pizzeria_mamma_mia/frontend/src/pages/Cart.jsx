// frontend/src/pages/Cart.jsx

import React from 'react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { useUser } from '../context/UserContext'; // <-- IMPORTAR useUser

const Cart = () => {
  // Consumir Cart Context 
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotal
  } = useCart();

  // 1. Consumir User Context para obtener el estado de autenticación
  const { isAuthenticated } = useUser();

  const total = calculateTotal();

  return (
    <div className="grid place-content-center">
      <h1 className="flex justify-center my-10 font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-4xl ">Carrito de Compras:</h1>

      {cart.length === 0 ? (
        <p className="text-lg text-center font-semibold text-gray-500">El carrito está vacío. ¡Añade algunas pizzas!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="grid grid-cols-12 my-3 gap-3 text-xs md:text-base lg:text-base xl:text-base 2xl:text-base" key={item.id}>
              <img className="col-start-2 col-span-3 h-10 rounded-sm shadow-md shadow-slate-800 grid justify-center items-center" src={item.img} alt={item.name}></img>
              <h2 className="col-start-5 col-span-2 font-bold grid items-center">{item.name}</h2>
              <p className="col-start-7 col-span-1 grid justify-center items-center">${formatCurrency(item.price)}</p>
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity === 0}
                className={`col-start-9 col-span-1 min-w-full rounded-full font-bold text-white grid justify-center items-center ${item.quantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-700'}`}
              >
                -
              </button>
              <p className="col-start-10 col-span-1 grid justify-center items-center font-bold bg-gray-100 rounded-full text-slate-900">{item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)} className="col-start-11 col-span-1 min-w-full rounded-full bg-green-600 font-bold text-white grid justify-center items-center">+</button>
            </div>
          ))}
        </>
      )}

      <div className="flex justify-center items-center flex-col">
        <h3 className="mt-10 text-slate-900 font-bold text-base md:text-xl ">Total: ${formatCurrency(total)}</h3>

        {/* 2. Lógica de deshabilitación del botón (Punto 4) */}
        <button
          className="p-4 max-w-fit px-20 text-white bg-slate-900 font-bold text-sm md:text-base rounded-full flex items-center justify-center my-3"
          // Deshabilita si: 1) El carrito está vacío O 2) El usuario NO está autenticado
          disabled={cart.length === 0 || !isAuthenticated}
        >
          Pagar
        </button>

        {/* Mensaje informativo cuando el pago está deshabilitado por falta de autenticación */}
        {cart.length > 0 && !isAuthenticated && (
          <p className="text-red-500 text-sm mt-2">Debes iniciar sesión para proceder al pago.</p>
        )}
      </div>
    </div>
  )
}

export default Cart