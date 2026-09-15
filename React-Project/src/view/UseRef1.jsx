import { useReducer, useRef } from "react";

function UseRef1() {

  const nameRef = useRef(null);
  const MailRef = useRef(null);

  const focusName = () => {
    nameRef.current.focus();
    
  };
  const focusMail = ()=>{
    MailRef.current.focus();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-8 rounded-xl shadow-md w-96">

        <h1 className="text-2xl font-bold text-center mb-6">
          UseRef Form
        </h1>
        <label className="block font-semibold mb-2">
          Name
        </label>

        <input
          ref={nameRef}
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
        />
        <label className="block font-semibold mb-2">
          Email
        </label>

        <input
        ref={MailRef}
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-lg p-2 mb-5"
        />
        <button
          onClick={focusName}
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Focus Name Input
        </button>
        <button
        onClick={focusMail}
        className="w-full bg-blue-600 text-white py-2 rounded-lg mt-3"
        >

          Focus mail input
        </button>

      </div>

    </div>
  );
}

export default UseRef1;