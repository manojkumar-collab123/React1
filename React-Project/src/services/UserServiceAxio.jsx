import AxioConfig from "../api/AxiosConfig";

class UserServiceAxio {
    getAllUsers() {
        return AxioConfig.get("/users");
    }
    getUserById(id) {
        return AxioConfig.get(`/users/${id}`);
    }

    createUser(userData) {
        return AxioConfig.post("/users", userData);
    }

    updateUser(id, userData) {
        return AxioConfig.put(`/users/${id}`, userData);
    }

    deleteUser(id) {
        return AxioConfig.delete(`/users/${id}`);
    }

}
export default new UserServiceAxio  ();