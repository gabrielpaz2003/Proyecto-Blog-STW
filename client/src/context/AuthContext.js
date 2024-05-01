import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, isAuthenticated: false });

    const login = (token) => {
        setAuth({ token, isAuthenticated: true });
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setAuth({ token: null, isAuthenticated: false });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired // Validar children como un nodo de React y requerido
};

export const useAuth = () => useContext(AuthContext);
