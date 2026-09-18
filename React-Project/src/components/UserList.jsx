import React from "react";

function UserList({ users, onView, onEdit, onDelete }) {
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-xl font-bold text-gray-800 sm:mb-6 sm:text-2xl">
                All Users
            </h2>

            {users.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                    {users.map((user) => (
                        <div
                            key={user.id}
                            className="min-w-0 rounded-xl border border-gray-200 bg-white p-4 shadow-md transition duration-300 hover:shadow-xl sm:p-5"
                        >
                            <div className="mb-4 flex min-w-0 items-center gap-3 sm:gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white sm:h-12 sm:w-12 sm:text-xl">
                                    {user.name?.charAt(0)?.toUpperCase()}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="truncate text-base font-bold text-gray-800 sm:text-lg">
                                        {user.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        User ID: {user.id}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-5 space-y-2 text-sm sm:text-base">
                                <p className="break-words text-gray-600">
                                    <span className="font-semibold">Email:</span>{" "}
                                    {user.email}
                                </p>

                                <p className="break-words text-gray-600">
                                    <span className="font-semibold">Phone:</span>{" "}
                                    {user.phone || "N/A"}
                                </p>

                                <p className="break-all text-gray-600">
                                    <span className="font-semibold">Website:</span>{" "}
                                    {user.website || "N/A"}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                <button
                                    onClick={() => onView(user.id)}
                                    className="w-full rounded-lg bg-blue-500 py-2.5 font-medium text-white transition hover:bg-blue-600"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => onEdit(user)}
                                    className="w-full rounded-lg bg-yellow-500 py-2.5 font-medium text-white transition hover:bg-yellow-600"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => onDelete(user.id)}
                                    className="w-full rounded-lg bg-red-500 py-2.5 font-medium text-white transition hover:bg-red-600"
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
