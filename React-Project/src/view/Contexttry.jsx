import { useContext } from "react";
import UserContext from "../context/UserContext";

function Contexttry() {

    const user = useContext(UserContext);

    return (
        <div>
            <h1>Profile</h1>

            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    );
}

export default Contexttry;