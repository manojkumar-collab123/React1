
import React from "react";

function UserDetail({users , onClose }){
    if(!user){
        return null;
    }
    return(
        <>  <div className="max-w-md mx-auto mt-6 bg-white shadow-lg rounded-xl p-6 border border-gray-200">

            <div className="flex justify-between items-center mb-5">
                <h2 className="text-2xl font-bold text-gray-800">
                    User Details
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    ID: {user.id}
                </span>
            </div>

            <div className="space-y-4">

                <div>
                    <p className="text-sm text-gray-500">
                        Name
                    </p>

                    <p className="text-lg font-semibold text-gray-800">
                        {user.name}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Email
                    </p>

                    <p className="text-gray-800">
                        {user.email}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Phone
                    </p>

                    <p className="text-gray-800">
                        {user.phone}
                    </p>
                </div>

                <div>
                    <p className="text-sm text-gray-500">
                        Website
                    </p>

                    <p className="text-gray-800">
                        {user.website}
                    </p>
                </div>

            </div>

            <button
                onClick={onClose}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
                Close
            </button>

        </div>
        </>
    )
}export default UserDetail;