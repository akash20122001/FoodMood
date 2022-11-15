import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import logo from "../images/logo.png";
import AddItem from "../Components/AddItem";
import AdminMenu from "../Components/AdminMenu";
import SeeUsers from "../Components/SeeUsers";
import SeeOrders from "../Components/SeeOrders";

export default function Admin() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [diet, setDiet] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [cooktime, setCooktime] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  const AllDishesCollectionRef = collection(db, "alldishes");
  const vegCollectionRef = collection(db, "vegetarian");
  const ordersCollectionRef = collection(db, "orders");
  const nonvegCollectionRef = collection(db, "nonvegetarian");

  const sweetsCollectionRef = collection(db, "sweets");
  const shakesCollectionRef = collection(db, "shakes");
  const chineseCollectionRef = collection(db, "chinese");
  const burgersCollectionRef = collection(db, "burgers");
  const pizzasCollectionRef = collection(db, "pizzas");
  const northindianCollectionRef = collection(db, "north-indian");
  const southindianCollectionRef = collection(db, "south-indian");

  const [activeComponent, setActiveComponent] = useState("home");

  const AddDish = async (category) => {
    try {
      const dish = await addDoc(AllDishesCollectionRef, {
        name: name,
        price: price,
        diet: diet,
        type: type,
        category: category,
        cooktime: cooktime,
        image1: image1,
        image2: image2,
      });
      // console.log()

      if (diet == "vegetarian") {
        const veg = await addDoc(vegCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else {
        const nonveg = await addDoc(nonvegCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      }

      if (category == "northindian") {
        const dish1 = await addDoc(northindianCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else if (category == "southindian") {
        const dish2 = await addDoc(southindianCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else if (category == "shakes") {
        const dish2 = await addDoc(shakesCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else if (category == "sweets") {
        const dish2 = await addDoc(sweetsCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else if (category == "burgers") {
        const dish2 = await addDoc(burgersCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else if (category == "pizzas") {
        const dish2 = await addDoc(pizzasCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      } else if (category == "chinese") {
        const dish2 = await addDoc(chineseCollectionRef, {
          name: name,
          price: price,
          diet: diet,
          type: type,
          category: category,
          cooktime: cooktime,
          image1: image1,
          image2: image2,
        });
      }

      console.log("Dish Added");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-gray-200 flex justify-center items-center h-screen w-screen">
      <div className="bg-white h-[90%] rounded-xl shadow-xl flex w-[90%] mx-auto ">
        <div className="w-[25%] bg-orange-400 h-full rounded-xl">
          <div className="flex justify-center items-center p-2 bg-gray-100 m-3 rounded-xl">
            <img src={logo} className="w-20 mr-4" alt="" />
            <span className="text-2xl font-semibold"> Admin</span>
          </div>
          <hr />
          <div className="flex mt-24 flex-col justify-center items-center p-2 bg-gray-100 m-3 rounded-xl">
            <button
              className="btn bg-orange-400 my-2 w-48"
              onClick={() => setActiveComponent("home")}
            >
              Admin Home
            </button>
            <button
              className="btn bg-orange-400 my-2 w-48"
              onClick={() => setActiveComponent("seemenu")}
            >
              See Complete Menu
            </button>
            <button
              className="btn bg-orange-400 my-2 w-48"
              onClick={() => setActiveComponent("additem")}
            >
              Add New Item
            </button>
            <button
              className="btn bg-orange-400 my-2 w-48"
              onClick={() => setActiveComponent("seeusers")}
            >
              See Users
            </button>
            <button
              className="btn bg-orange-400 my-2 w-48"
              onClick={() => setActiveComponent("seeorders")}
            >
              See Orders
            </button>
          </div>
        </div>
        <div className="w-[75%] bg-white flex flex-col h-full">
          <div className="flex justify-center text-gray-800 mb-6 items-center mt-4">
            <span className="text-3xl font-semibold">Welcome to the </span>
            <span className="text-3xl text-teal-800 font-bold ml-2">
              {" "}
              Food
            </span>
            <span className="text-3xl text-black font-bold mr-2">Mood </span>
            <span className="text-3xl font-semibold"> Admin</span>
          </div>
          <hr />
          {
            activeComponent==="home" ?  <div className="grid grid-flow-col grid-rows-2 gap-8 mx-auto mt-16">
            <div className="card w-[20rem]  shadow-xl image-full">
              <figure>
                <img
                  src="https://www.winni.in/celebrate-relations/wp-content/uploads/2019/03/f7.jpg"
                  alt="food"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Add a New Item</h2>
                <p>Press this button to add a new item in the menu</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-orange-400 w-32"
                    onClick={() => setActiveComponent("additem")}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem]  shadow-xl image-full">
              <figure>
                <img
                  src="https://www.winni.in/celebrate-relations/wp-content/uploads/2019/03/f7.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">See Users</h2>
                <p>Press this button to view detail of all the Customers </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-orange-400 w-32"
                    onClick={() => setActiveComponent("seeusers")}
                  >
                    See Users
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem]  shadow-xl image-full">
              <figure>
                <img
                  src="https://www.winni.in/celebrate-relations/wp-content/uploads/2019/03/f7.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">See Orders</h2>
                <p>
                  Press this button to view all the orders of the customers.
                </p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-orange-400 w-32"
                    onClick={() => setActiveComponent("seeorders")}
                  >
                    See Orders
                  </button>
                </div>
              </div>
            </div>
            <div className="card w-[20rem]  shadow-xl image-full">
              <figure>
                <img
                  src="https://www.winni.in/celebrate-relations/wp-content/uploads/2019/03/f7.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">See Menu</h2>
                <p>Press this button to view all the menu items.</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn bg-orange-400 w-32"
                    onClick={() => setActiveComponent("seemenu")}
                  >
                    See Menu
                  </button>{" "}
                </div>
              </div>
            </div>
          </div> : activeComponent==="additem" ? <AddItem/> : activeComponent==="seemenu" ? <AdminMenu/>: activeComponent==="seeusers" ? <SeeUsers/> : <SeeOrders/>}
          
        </div>
      </div>
      </div>
      );
    }
    
   