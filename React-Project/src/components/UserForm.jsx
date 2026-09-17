import React, { useEffect, useState } from "react";

function UserForm({ onSubmit, editingUser, onCancel }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (editingUser) {
            setFormData({
                name: editingUser.name || "",
                email: editingUser.email || "",
                phone: editingUser.phone || "",
            });
        } else {
            setFormData({
                name: "",
                email: "",
                phone: "",
            });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/[^0-9+\-\s()]/g, "");

        setFormData((previousData) => ({
            ...previousData,
            phone: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-5">
                {editingUser ? "Edit User" : "Add User"}
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone
                    </label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter phone number"
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={15}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
                    >
                        {editingUser ? "Update User" : "Add User"}
                    </button>

                    {editingUser && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 rounded-lg transition"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default UserForm;
