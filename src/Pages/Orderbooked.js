import React from "react";
import logo from "../images/logo.png";
import { useNavigate, Link } from "react-router-dom";

export default function Orderbooked() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
        <Link to="/" className="font-semibold">
          <img src={logo} className="h-16" alt="" />
        </Link>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <div className=" p-16 font-bold text-2xl text-orange-500">
          Your Order has been Placed <br /> Successfully !!!
          <h1 className="font-bold mt-8 text-xl text-gray-900">
            Just visit the Restaurant and enjoy your Food
          </h1>
        </div>
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
          onClick={() => navigate("/menu")}
        >
          Go to Menu
        </button>
      </div>
    </div>
  );
}
