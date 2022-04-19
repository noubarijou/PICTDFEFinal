import {createContext, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [role, setRole] = useState({});


return (
    <AuthContext.Provider value={{auth, setAuth, role, setRole}}>
        {children}
    </AuthContext.Provider>
)
}

export default AuthContext;