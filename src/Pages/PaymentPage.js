import React from "react";
import logo from "../images/logo.png";
import { useNavigate, Link,useLocation } from "react-router-dom";
import {collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "../firebase-config";


export default function Orderbooked() {
    const navigate = useNavigate();
    const location = useLocation();

    const ordersCollectionRef = collection(db, "orders");

    const doPaymentAndBook = async () => {
        try{
        const order = await addDoc( ordersCollectionRef, {username: location.state.name, userphone: location.state.phone, dishesname: location.state.dishesname, price: location.state.price, tables: location.state.tables, quantities: location.state.quantities, useremail: location.state.email, totalprice: location.state.totalprice, visitTime: location.state.visitTime, visitDate: location.state.visitDate });
        // console.log(orders)/
        // toast.success("Booking Done Successfully !");
        // console.log(bookedTables)
        console.log(order)
        navigate('/orderbooked')
        }catch(error){
            console.log(error.message)
        }
    }

  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
        <Link to="/" className="font-semibold">
          <img src={logo} className="h-16" alt="" />
        </Link>
      </div>
      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <div className=" p-16 font-bold text-2xl text-orange-500">
         You are just one step away from booking your order !!!
          <h1 className="font-bold mt-8 text-xl text-gray-900">
            Just pay for your order and complete your booking.
          </h1>
        </div>
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
          onClick={doPaymentAndBook}
        >
          Do Payment
        </button>
      </div>
    </div>
  );
}
