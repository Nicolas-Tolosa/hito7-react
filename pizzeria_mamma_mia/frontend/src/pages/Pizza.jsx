// src/pages/Pizza.jsx (Refactorizado como página de DETALLE)

import React from 'react'
import { useParams } from 'react-router-dom'; // Para obtener el ID de la URL
import { formatCurrency } from '../utils/formatCurrency'
import { usePizzas } from '../context/PizzaContext' // Consumir PizzaContext

// Si esta página es de listado, usa el Home.jsx. 
// Si esta página es de detalle (lo más probable), usamos useParams.
const PizzaDetail = () => {
    // Si estás usando React Router, obtienes el ID
    const { id } = useParams();

    // Consumimos el estado de pizzas cargado una sola vez
    const { pizzas, loading, error, getPizzaById } = usePizzas();

    // Buscamos la pizza específica por ID
    const pizza = getPizzaById(id);

    if (loading) return <p className="text-center mt-10">Cargando detalles de pizza...</p>;
    if (error) return <p className="text-center mt-10 text-red-600">Error: {error}</p>;
    if (!pizza) return <p className="text-center mt-10">Pizza no encontrada.</p>;

    // Si necesitas agregar la pizza desde aquí también:
    // const { addToCart } = useCart();
    // <button onClick={() => addToCart(pizza)} ... >Añadir</button>

    // Aquí iría el JSX para mostrar UNA SOLA pizza detallada,
    // ya que no necesitas mapear todas de nuevo como estaba en tu código original.
    return (
        <div className="flex justify-center my-10">
            <div className="max-w-2xl bg-white border border-gray-100 rounded-lg shadow p-6">
                <img className="rounded-t-lg w-full h-80 object-cover" src={pizza.img} alt={pizza.name} />
                <h1 className="mt-4 text-3xl font-bold">{pizza.name}</h1>
                <p className="mt-2 text-xl font-semibold text-gray-800">${formatCurrency(pizza.price)}</p>
                <p className="mt-4 text-gray-700">{pizza.desc}</p>
                <h3 className="mt-4 text-lg font-bold">Ingredientes:</h3>
                <ul className="list-disc list-inside text-gray-600">
                    {pizza.ingredients?.map((ing, index) => (
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
                {/* Puedes añadir un botón para volver o añadir al carrito aquí */}
            </div>
        </div>
    );
};

export default PizzaDetail;