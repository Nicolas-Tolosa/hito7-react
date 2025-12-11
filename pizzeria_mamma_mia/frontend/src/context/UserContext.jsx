import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); // Cambiar el token inicial a FALSE para probar el punto 5

    const logout = () => {
        setToken(false);
        console.log("Usuario ha cerrado sesión. Token: false");
    };

    const login = () => {
        setToken(true);
        console.log("Usuario ha iniciado sesión. Token: true");
    }

    const contextValue = {
        token,
        logout,
        login,
        isAuthenticated: token 
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};