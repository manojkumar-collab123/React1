import { createContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {

    const data = {
        name: "Ankit",
        email: "ankit@gmail.com",
        role: "Developer"
    };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    );
}

export { UserProvider };

export default UserContext;