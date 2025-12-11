import React from 'react';
import { Link } from 'react-router-dom'; 

const Profile = () => {
  return (
    <section className="flex flex-col items-center bg-slate-900 max-w-md mx-auto rounded-xl my-10 p-10 space-y-5">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
        alt="user image" 
        className="h-20 rounded-full border-2 border-white"
      />
      <div className="text-white space-y-3 text-center">
        <div className="flex flex-col">
          <p className="font-bold">Usuario:</p>
          <p>Juan Perez</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Correo:</p>
          <p>juanperez@mammamia.com</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Teléfono:</p>
          <p>+56 966666666</p>
        </div>
      </div>
      <Link to="/">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Cerrar Sesión
        </button>
      </Link>

    </section>
  );
};

export default Profile;