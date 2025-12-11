import React from 'react';
import { formatCurrency } from '../utils/formatCurrency';
import { FaCartShopping } from "react-icons/fa6";
import { CiPizza } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { BiSolidLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

// 1. IMPORTAR EL CONTEXT
import { useCart } from '../context/CartContext';

const Navbar = () => {
    // 2. REEMPLAZAR EL VALOR ESTATICO (25000) POR EL CONTEXT
    const { calculateTotal } = useCart();
    const total = calculateTotal(); // El total se calcula dinámicamente

    const token = false;

    return (
        <div className="flex justify-between bg-slate-900 items-center px-2 py-3">

            <div className="flex items-center space-x-3 text-white ml-6">
                <div className="flex items-center">
                    <Link to="/" className="flex items-center space-x-1">
                        <CiPizza className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white" />
                        <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">Pizzería</span>
                    </Link>
                </div>

                <div className="flex space-x-3">
                    {token ? (
                        <>
                            <Link to="/login" className="flex items-center space-x-1">
                                <BiSolidLogIn className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white" />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">Login</span>
                            </Link>
                            <Link to="/register" className="flex items-center space-x-1">
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">Registrar</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/profile" className="flex items-center space-x-1">
                                <FaUser className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white" />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">Perfil</span>
                            </Link>
                            <Link to="/" className="flex items-center space-x-1">
                                <BiSolidLogOut className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white" />
                                <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">Logout</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="flex items-center space-x-3 text-white mr-6">
                <Link to="/cart" className="flex items-center space-x-1">
                    <FaCartShopping className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white" />
                    <p className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">Total:</p>
                    <span className="text-xs md:text-lg lg:text-lg xl:text-lg 2xl:text-lg text-white">
                        ${formatCurrency(total)} {/* <--- AHORA USA EL TOTAL DINÁMICO */}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;