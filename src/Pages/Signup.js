import React, { useState } from "react";
import vid from "../images/vid.gif";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

export default function Signup() {
  const navigate = useNavigate();

  const usersCollectionRef = collection(db, "users");

  const [userInfo, setUserInfo] = useState({ name: "",
    email: "",
    phone: ""});


  const [registerEmail, setRegisterEmail] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [regPassConf, setRegPassConf] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");

  const [passSame, setPassSame] = useState(true);
  // const [first, setfirst] = useState(second)
  
  const hasLowerCase = (s) => s.toUpperCase() != s;
  const hasUpperCase = (s) => s.toLowerCase() != s;
  function containsNumber(str) {
    return /[0-9]/.test(str);
  }
  const registerUser = async () => {
    if(registerName.length<3 || containsNumber(registerName)===true){
        toast.error("The username should be atleast 3 characters long and must contain letters only");
    }
    else if(
        hasLowerCase(registerPhone) === true ||  hasUpperCase(registerPhone) === true || registerPhone.length != 10 
    ){
        toast.error("Phone Number should contain only Digits and must be 10 digits long");
    }
    else if (
      hasLowerCase(registerPass) === true &&
      hasUpperCase(registerPass) === true &&
      containsNumber(registerPass) === true &&
      registerPass.length >= 8
    ) {
      if (regPassConf !== registerPass) {
        toast.error("Passwords Should be same");
      } else {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPass
          );
          setUserInfo({
            name: registerName,
            email: registerEmail,
            phone: registerEmail
          });
          console.log(user);
          toast.success("Successfully Signed Up !");
          
          const userData = await addDoc( usersCollectionRef, {name: registerName, phone: registerPhone, email: registerEmail});
          
          console.log(userData);
        //   navigate("/menu");
        console.log(userInfo);
          navigate('/menu',{state: {name: registerName, email: registerEmail, phone: registerPhone}});
          // }
        } catch (error) {
          console.log(error.message);
          toast.error(error.message);
        }
      }
    } else {
      toast.error(
        "Passwords Should contain atleast one Digit, one Capital letter, one small letter and one special character and length should be atleast 8 letters"
      );
    }
  };

  // const notify = () =>  toast.success("Successfully Signed Up !");

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <Link to="/" className="font-semibold">
            <img src={logo} className="h-16" alt="" />
          </Link>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <div>
            <div>
              <label
                htmlFor="name"
                className="flex justify-start text-sm font-medium text-gray-700 undefined"
              >
                Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  // name="name"
                  value={registerName}
                  onChange={(event) => setRegisterName(event.target.value)}
                  className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="flex justify-start text-sm font-medium text-gray-700 undefined"
              >
                Phone Number
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="phone"
                  // name="phone"
                  value={registerPhone}
                  onChange={(event) => setRegisterPhone(event.target.value)}
                  className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
                />
              </div>
            </div>
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
                  // name="email"
                  value={registerEmail}
                  onChange={(event) => setRegisterEmail(event.target.value)}
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
                  // name="password"
                  value={registerPass}
                  onChange={(event) => setRegisterPass(event.target.value)}
                  className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="flex justify-start text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
                <span>( should be same as Password )</span>
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  // name="password_confirmation"
                  value={regPassConf}
                  onChange={(event) => setRegPassConf(event.target.value)}
                  className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
                />
              </div>
            </div>
            <a href="#" className="text-xs text-purple-600 hover:underline">
              Forget Password?
            </a>
            <div className="flex items-center mt-4">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
                onClick={registerUser}
              >
                Register
              </button>
            </div>
          </div>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <span
                className="text-purple-600 hover:underline"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
