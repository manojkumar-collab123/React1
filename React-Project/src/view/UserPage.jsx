import React, { useEffect, useState } from "react";
import UserService from "../services/UserServiceAxio";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import UserDetails from "../components/UserDetail";

function UserPage() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editingUser, setEditingUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchUsers = async () => {
        try {
            setLoading(true);
            setError("");
            const response = await UserService.getAllUsers();
            setUsers(response.data);
        } catch (error) {
            console.log(error);
            setError("Failed to load users.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleView = async (id) => {
        try {
            const response = await UserService.getUserById(id);
            setSelectedUser(response.data);
        } catch (error) {
            console.log(error);
            setError("Failed to get user details.");
        }
    };

    const handleSubmit = async (formData) => {
        try {
            setError("");

            if (editingUser) {
                const response = await UserService.updateUser(
                    editingUser.id,
                    formData
                );

                setUsers(
                    users.map((user) =>
                        user.id === editingUser.id
                            ? {
                                ...user,
                                ...response.data,
                                name: formData.name,
                                email: formData.email,
                                phone: formData.phone
                            }
                            : user
                    )
                );
                setEditingUser(null);
            } else {
                const response = await UserService.createUser(formData);

                const newUser = {
                    ...response.data,
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                };

                setUsers([...users, newUser]);
            }
        } catch (error) {
            console.log(error);
            setError("Operation failed.");
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setSelectedUser(null);
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this user?"
        );

        if (!confirmDelete) {
            return;
        }

        try {
            await UserService.deleteUser(id);
            setUsers(users.filter((user) => user.id !== id));
        } catch (error) {
            console.log(error);
            setError("Failed to delete user.");
        }
    };

    const handleCancel = () => {
        setEditingUser(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
            <div className="mx-auto w-full max-w-7xl">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:mb-8 sm:text-3xl">
                    User CRUD Application
                </h1>

                {error && (
                    <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-center text-sm text-red-600 sm:text-base">
                        {error}
                    </p>
                )}

                <UserForm
                    onSubmit={handleSubmit}
                    editingUser={editingUser}
                    onCancel={handleCancel}
                />

                {selectedUser && (
                    <UserDetails
                        user={selectedUser}
                        onClose={() => setSelectedUser(null)}
                    />
                )}

                {loading ? (
                    <p className="mt-8 text-center text-gray-600">
                        Loading users...
                    </p>
                ) : (
                    <UserList
                        users={users}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                )}
            </div>
        </div>
    );
}

export default UserPage;
