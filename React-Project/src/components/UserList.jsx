import React from "react";

function UserList({ users, onView, onEdit, onDelete }) {

    return (
        <div className="mt-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                All Users
            </h2>

            {users.length === 0 ? (

                <p className="text-gray-500">
                    No users found.
                </p>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {users.map((user) => (

                        <div
                            key={user.id}
                            className="bg-white rounded-xl shadow-md border border-gray-200 p-5 hover:shadow-xl transition duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">

                                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                    {user.name.charAt(0)}
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {user.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        User ID: {user.id}
                                    </p>
                                </div>

                            </div>
                            <div className="space-y-2 mb-5">

                                <p className="text-gray-600">
                                    <span className="font-semibold">
                                        Email:
                                    </span>{" "}
                                    {user.email}
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-semibold">
                                        Phone:
                                    </span>{" "}
                                    {user.phone}
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-semibold">
                                        Website:
                                    </span>{" "}
                                    {user.website}
                                </p>

                            </div>
                            <div className="flex gap-2">

                                <button
                                    onClick={() => onView(user.id)}
                                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => onEdit(user)}
                                    className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium transition"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => onDelete(user.id)}
                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default UserList;