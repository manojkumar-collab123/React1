import React, { useReducer, useState } from "react";
const initialState = {
    todos: []
};
function reducer(state, action) {

    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload,
                        completed: false,
                    },
                ],
            };
        case "TOGGLE_TODO":
            return {


                ...state,

                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? {
                            ...todo,
                            completed: !todo.completed,
                        }
                        : todo 
                ),      
            };
        case "DELETE_TODO":
            return {
                ...state,

                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                ),
            };


        default:
            return state;
    }
}


function TodoReducerHook() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );
    const [input, setInput] = useState("");
    const addTodo = () => {

        if (input.trim() === "") {
            return;
        }

        dispatch({
            type: "ADD_TODO",
            payload: input,
        });

        setInput("");
    };


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

            <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-lg">

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Todo App
                </h1>

                <div className="flex gap-2 mb-6">

                    <input
                        type="text"
                        placeholder="Enter your todo..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    <button
                        onClick={addTodo}
                        className="bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-600"
                    >
                        Add
                    </button>

                </div>
                <div className="space-y-3">

                    {state.todos.length === 0 ? (

                        <p className="text-center text-gray-500">
                            No todos added yet.
                        </p>

                    ) : (

                        state.todos.map((todo) => (

                            <div
                                key={todo.id}
                                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
                            >
                                <div className="flex items-center gap-3">

                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() =>
                                            dispatch({
                                                type: "TOGGLE_TODO",
                                                payload: todo.id,
                                            })
                                        }
                                        className="w-5 h-5"
                                    />


                                    <span
                                        className={`text-lg ${todo.completed
                                            ? "line-through text-gray-400"
                                            : "text-gray-800"
                                            }`}
                                    >
                                        <p className="text-sm">{todo.id}</p>- <p>{todo.text}</p>
                                    </span>

                                </div>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "DELETE_TODO",
                                            payload: todo.id,
                                        })
                                    }
                                    className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Delete
                                </button>


                            </div>

                        ))

                    )}

                </div>

            </div>

        </div>
    );
}


export default TodoReducerHook;