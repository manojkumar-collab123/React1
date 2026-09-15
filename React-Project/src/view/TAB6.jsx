import { useRef } from "react";

function Reftab() {
    const inputRef = useRef(null);                      
    // const [name, setName] = useState("");

    //   const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };
    const bluringInput = () => {
        inputRef.current.blur();
    }

        conole.log(inputRef.current.value);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(name);
    // }

    return (
        <>
            <input ref={inputRef} type="text" />

            <button onClick={focusInput}>
                Focus Input
            </button>
            <button onClick={bluringInput}>
                Blur Input
            </button>
            {/* <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                Submit
            </button> */}
        </>
    );
}

export default Reftab; 
