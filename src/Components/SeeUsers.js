import React,{useState, useEffect} from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import profile from "../images/profile.png";

export default function SeeUsers() {

const [seeUsers, setSeeUsers] = useState([])
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getAllUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setSeeUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }; 
        getAllUsers();
      }, []);
  return (
    <>
      <h1 className="font-semibold text-gray-800 text-xl my-3">
        List of all Customers
      </h1>
    <div className=" bg-gray-200 p-3 mx-auto rounded-xl ">
      <div className="grid grid-flow-row overflow-y-scroll scrollbar-hide grid-cols-2 bg-gray-200 p-3 mx-auto gap-4 h-96">

        {  
        seeUsers.map((user) => {
            return (
                <div className="card card-side bg-white w-96 h-32 p-0 m-0 shadow-xl">
                <figure>
                  <img src={profile} className="w-24 ml-6" alt="Profile" />
                </figure>
                <div className="card-body p-0 m-0">
                  <h2 className="card-title mt-4 p-0 mx-auto">{user.name}</h2>
                  <p>Email : {user.email}</p>
                  <p className="mb-4">Phone : {user.phone}</p>
                  
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
