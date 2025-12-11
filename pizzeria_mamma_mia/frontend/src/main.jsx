// main.jsx (Para referencia y confirmación)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'

import { CartProvider } from './context/CartContext.jsx'
import { PizzaProvider } from './context/PizzaContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* PizzaProvider debe estar fuera de CartProvider para que CartProvider acceda a sus datos */}
    <PizzaProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </PizzaProvider>
  </StrictMode>,
)