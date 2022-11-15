import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function () {
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "users");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginUser =  () => {
    
        if(loginEmail==="admin@foodmood.com" && loginPassword==="FoodMoodAdmin@123"){
    //   console.log(user);
      toast.success("Admin Signed In !");
      navigate("/admin");
        }
    else{
    //   console.log(error.message);
      toast.error("Email or Password is Incorrect");
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <Link to="/" className="font-semibold">
            <img src={logo} className="h-16 ml-4 mb-3" alt="" />
          </Link>
          <span className="text-2xl font-bold">ADMIN LOGIN</span>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="flex justify-start text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                  className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="flex justify-start text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                  className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
                />
              </div>
            </div>

          
            <div className="flex items-center mt-4">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={loginUser}
              >
                Login
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
