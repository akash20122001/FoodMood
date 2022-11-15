import React,{useState, useEffect} from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import profile from "../images/profile.png";

export default function SeeUsers() {

const [seeOrders, setSeeOrders] = useState([])
    const ordersCollectionRef = collection(db, "orders");

    useEffect(() => {
        const getAllOrders = async () => {
          const data = await getDocs(ordersCollectionRef);
          setSeeOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }; 
        getAllOrders();
      }, []);
  return (
    <>
      <h1 className="font-semibold text-gray-800 text-xl my-3">
        List of all Orders
      </h1>
    <div className=" bg-gray-200 p-3 mx-auto rounded-xl ">
      <div className="grid grid-flow-row overflow-y-scroll scrollbar-hide grid-cols-2 bg-gray-200 p-3 mx-auto gap-4 h-96">

        {  
        seeOrders.map((order,i) => {
            return (
            
                <div className="card  bg-white w-80 h-[23rem] p-3 m-0 shadow-xl">
                <figure>
                  <img src={profile} className="w-20" alt="Profile" />
                </figure>
                <div className="card-body p-0 m-0">
                  <h2 className="card-title mt-4 p-0 mx-auto">{order.username}</h2>
                  <p>OrderId : 1021{i}</p>
                  <p>Email : {order.useremail}</p>
                  <p >Phone : {order.userphone}</p>
                  <p>Items : {order.dishesname}</p>
                  <p>Amount : &#8377; {order.totalprice}</p>
                  <p>Date : {order.visitDate}</p>
                  {/* <p className="mb"></p> */}
                  
                </div>
              </div>

            );
        })
        }

    
       
      </div>
    </div>
    </>
  );
}
