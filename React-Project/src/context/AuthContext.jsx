import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const login = () => {
        setUser({
            name: "Manoj",
            email: "manojberar70@.com",
            role: "Engineer"
        });

    };
    const logout = () => {

        setUser(null);

    };
    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;