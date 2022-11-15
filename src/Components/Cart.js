import React,{useState} from 'react'
import food1 from "../images/3.jpg";
import Modal from './Modal';

export default function Cart({orders}) {
  const [trial, setTrial] = useState("");

  const [orderType, setOrderType] = useState("dinein");

  const [openBookingModal, setOpenBookingModal] = useState(false);


  const Dinein = () => {
    setOrderType("dinein");
  };
  const TakeAway = () => {
    setOrderType("takeaway");
  };
  return (
    <div className="w-screen h-screen bg-blue-200">
      { openBookingModal == true ? <Modal/> : <div className="w-[25%] bg-white border-2 border-gray-300 border-t-0 flex flex-col ">
      
      <div className="navbar bg-white text-[#1F2937]">
        
        <div className="flex">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar mr-3"
          >
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <div className="flex flex-col items-start">
            <h1 className="font-semibold">Akash Soni</h1>
            <h2 className="text-gray-500">akash888299@gmail.com</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="px-8 py-4">
        {/* <Cart trial = {trial}/> */}
  
        
        <h1 className="text-2xl font-semibold flex flex-start ">Cart</h1>
        <div className="flex justify-center mt-4">
          <button
            className={` rounded-full btn mr-3 px-3 py-1 hover:cursor-pointer ${
              orderType === "dinein" ? `bg-orange-500 text-white hover:bg-orange-500 hover:text-white ` : `bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800`
            } `}
            onClick={Dinein}
          >
            Dine-in
          </button>
          <div
            className={` rounded-full btn mr-3 px-3 py-1 hover:cursor-pointer ${
              orderType === "takeaway" ? `bg-orange-500 text-white hover:bg-orange-500 hover:text-white ` : `bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800`
            } `}
            onClick={TakeAway}
          >
            Take-away
          </div>
        </div>
  
        <div className="grid grid-cols-1 w-full h-72 mt-4 p-3 overflow-y-scroll bg-gray-100 rounded-xl">
          
          {  orders?.map((currOrder,i) => {
            return <div key={i} className="flex w-full bg-white shadow-lg h-32 mb-3 p-2 rounded-xl">
                
                <img src={food1} className="h-full rounded-lg" alt="" />
                {currOrder.name}
                {currOrder.price}
                <div className="flex flex-col items-start ml-4">
                  <h1 className="font-semibold text-lg">Chhole Bhature</h1>
                  <h1 className="text-gray-400">Price <span className="ml-6 text-orange-400">$12.45</span></h1>
                <div className="flex mt-4 mx-auto">
                  <button className="btn btn-circle hover:bg-orange-500 hover:text-white  btn-outline btn-sm bg-white text-black m-0 p-0">-</button>
                  <div className="bg-gray-100 border-0 w-8 border-gray-400 rounded-lg mx-2">1</div>
                  <button className="btn btn-circle btn-outline btn-sm hover:bg-orange-500 hover:text-white  bg-white text-black m-0 p-0">+</button>
                </div>
                </div>
            </div>
          }) }
  
          {/* <button onClick={addData}>Add Data</button> */}
          
          
          {/* <div className="flex w-full bg-white h-32  mb-2 ">
  
          </div>
          <div className="flex w-full bg-white h-32 mb-2 ">
  
          </div> */}
        </div>
  
        <div className= "mt-8">
          <div className="flex justify-between">
            <h1 className="font-semibold">Items</h1>
            <h1>$12.56</h1>
          </div>
          <div className="flex justify-between">
            <h1 className="font-semibold">Tax</h1>
            <h1>$3.45</h1>
          </div>
          <hr className="my-2"/>
          <div className="flex justify-between">
            <h1 className="font-bold">Total</h1>
            <h1 className="font-bold text-orange-500">$16.01</h1>
          </div>
        </div>
  
        <div className="flex flex-col mt-[1rem]">
          <button
            className={` btn bg-orange-500 ${
              orderType === "dinein" ? `hidden` : `visible`
            }`}
          >
            {" "}
            Place Order{" "}
          </button>
          <button 
            className={` btn bg-orange-500 ${
              orderType === "takeaway" ? `hidden` : `visible `
            }`}
          >
            {" "}
            Book Table{" "}
          </button>
        </div>
      </div>
    </div>}
    </div>
    
  )
}









