import React, { useReducer } from 'react'

const initaialState = {
    count: 0
};
function reducer(state, action) {
    switch (action.type) {
        case "Increment":
            return {
                ...state,
                count: state.count + 1
            };
        case "Decrement":
            return {
                ...state,
                count: state.count - 1
            };
        case "Reset":
            return {
                ...state,
                count: 0
            };
        default:
            return state;
    }
}

function ReducerHook() {
    const [state, dispatch] = useReducer(reducer, initaialState);
    return (
    <>
          <h2 className='ml-[590px] mt-36'>{state.count}</h2>
            <div className='grid grid-flow-row ml-[550px]'>
                <button
                    className=" bg-blue-600 text-white py-2 rounded-lg mt-3 w-24 "
                    onClick={() => dispatch({ type: "Increment" })}
                >
                    +
                </button>
                <button
                    className=" bg-blue-600 text-white py-2 rounded-lg mt-3 w-24 "

                    onClick={() => dispatch({ type: "Decrement" })}
                >
                    -
                </button>
                <button
                    className=" bg-blue-600 text-white py-2 rounded-lg mt-3 w-24 "
                    onClick={() => dispatch({ type: "Reset" })}
                >
                    Reset
                </button>
            </div>
        </>
    )
}

export default ReducerHook