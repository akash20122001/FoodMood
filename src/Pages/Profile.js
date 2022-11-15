import React, {useState} from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("myorders");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="flex justify-center w-full h-screen items-center bg-gray-200">
      <div className="flex flex-col bg-white">
        <div className="navbar bg-white h-32 text-[#1F2937]">
          <div className="flex navbar-start">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-3"
            >
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <div className="flex flex-col items-start">
              <h1 className="font-semibold">{location.state.name}</h1>
              <h2 className="text-gray-500">{location.state.email}</h2>
            </div>
          </div>
          <div className="w-[37vw]"></div>
          <div className="flex navbar-end">
            <button className="btn btn-ghost rounded-full bg-orange-400 avatar mr-3">
              Go Back
            </button>
          </div>
        </div>
        <hr />
        <div className="tabs w-[100%]">
          <div className={`tab tab-lifted w-1/2 font-semibold text-xl ${activeTab=="myorders"? "text-white  bg-orange-400" : "text-gray-800 bg-gray-100"}`} onClick={()=>setActiveTab("myorders")}>Order History</div>
          <div className={`tab tab-lifted w-1/2 font-semibold text-xl ${activeTab=="myaccount"? "text-white bg-orange-400" : "text-gray-800 bg-gray-100"}`} onClick={()=>setActiveTab("myaccount")}>My Account</div>
         
        </div>
        {
            activeTab == "myorders" ? (<div>Hello</div>) : (<div>Bye</div>)
        }
      </div>
    </div>
  );
}
