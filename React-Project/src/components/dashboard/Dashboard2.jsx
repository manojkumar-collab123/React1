

import { useNavigate } from "react-router-dom"
import Card2 from "../../view/Card2"
function Dashborad2() {
   const navigate = useNavigate();
    return (
        <>
            <div className=" ml-[420px] mt-[223px] flex flex-row gap-10 w-[400px] group          rounded-[123px] align-middle  ">
                <div>
                    <button className=" w-40 h-20 bg-blue-700 rounded-md hover:scale-110 transition-all duration-300 " onClick={() => navigate('/cardapi')}>
                        Cards
                    </button>
                </div>
                <div>
                    <button className="w-40 h-20 bg-green-600 rounded-sm hover:scale-110 transition-all duration-300 " onClick={() => navigate('/tableapi')}>
                        Table
                    </button>
                </div>
            </div>
        </>
    )
    
}
export default Dashborad2 
