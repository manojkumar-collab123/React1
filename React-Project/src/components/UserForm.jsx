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
        <div className="mx-auto w-full max-w-md rounded-xl border border-gray-200 bg-white p-4 shadow-lg sm:p-6">
            <h2 className="mb-5 text-xl font-bold text-gray-800 sm:text-2xl">
                {editingUser ? "Edit User" : "Add User"}
            </h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 sm:px-4"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 sm:px-4"
                        required
                    />
                </div>

                <div className="mb-5">
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
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
                        className="w-full min-w-0 rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:ring-2 focus:ring-blue-400 sm:px-4"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-500 py-2.5 font-semibold text-white transition hover:bg-blue-600"
                    >
                        {editingUser ? "Update User" : "Add User"}
                    </button>

                    {editingUser && (
                        <button
                            type="button"
                            onClick={onCancel}
                            className="w-full rounded-lg bg-gray-500 py-2.5 font-semibold text-white transition hover:bg-gray-600"
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
