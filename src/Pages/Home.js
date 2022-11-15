import React from "react";
import homePhoto from "../images/2.jpg";
import logo from "../images/logo.png";
import book from "../images/book.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex">
      <div className="flex bg-[#F2F2F2] flex-col w-[100%] lg:w-[68%] px-5">
        <div className="navbar bg-[#F2F2F2] text-black">
          <div className="flex-1">
            <img src={logo} className="w-32" alt="" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
              <Link to="/signup" className="font-semibold">Signup</Link>
               
              </li>
              <li>
              <Link to="/login" className="font-semibold">Login</Link>
              </li>
              <li>
              <Link to="/adminlogin" className="font-semibold">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#F2F2F2] text-black p-[50px] flex flex-col items-start justify-center h-[100%]">
          <h1 className="text-[#FF3D00] text-6xl font-semibold mx-auto lg:mx-0 ">Order your</h1>
          <h1 className="text-black text-6xl py-4 mx-auto lg:mx-0">favourite foods</h1>
          <p className="">
            The Food Mood Restaurant brings to you the comfort of ordering your food and booking your table in advance
          </p>
          <p className="">
            so you don't have to waste your time waiting for your order to be cooked.
          </p>
          <p className="">
            So what are you waiting for! Order your food and enjoy.
          </p>

          <div className="grid grid-rows-2 grid-flow-col lg:grid-rows-1 gap-16 mx-auto mt-10">
          <Link to="/menu" className="font-semibold"> <div className="flex flex-col ">
              <img src={book} className="h-32" alt="" />
              <h1 className=" text-black text-lg font-semibold">
                Book Table in
              </h1>
              <h1 className="text-[#FF3D00] text-lg font-semibold">Advance</h1>
            </div>
          </Link>
           
          <Link to="/menu" className="font-semibold"> 

            <div className="flex flex-col ">
              <img src={book} className="h-32" alt="" />
              <h1 className=" text-black text-lg font-semibold">View Full</h1>
              <h1 className="text-[#FF3D00] text-lg font-semibold">Menu</h1>
            </div>
          </Link>

          <Link to="/menu" className="font-semibold"> 
            
            <div className="flex flex-col ">
              <img src={book} className="h-32" alt="" />
              <h1 className=" text-black text-lg font-semibold">
                Order Food in
              </h1>
              <h1 className="text-[#FF3D00] text-lg font-semibold">Advance</h1>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <img className=" bg-auto w-[0%] lg:w-[32%] " src={homePhoto} alt="" />
    </div>
  );
}
