import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const UserContext = createContext();

// Proveedor del contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Función para actualizar un atributo específico del usuario
    const actualizar = (clave, valor) => {
        setUser((prevUser) => ({
            ...prevUser, // Mantiene los atributos existentes
            [clave]: valor, // Actualiza solo el atributo especificado
        }));
    };

    return (
        <UserContext.Provider value={{ user, setUser, actualizar }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);