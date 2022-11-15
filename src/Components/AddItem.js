import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddItem() {
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
      toast.success("Dish Added Successfully !")
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="flex flex-col">
    <div className="grid grid-flow-col grid-rows-4 mx-8 bg-orange-200 p-6 rounded-xl mt-16 gap-6">
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
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Price
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Diet
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={diet}
              onChange={(event) => setDiet(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Type
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={type}
              onChange={(event) => setType(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Category
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Cooking Time
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={cooktime}
              onChange={(event) => setCooktime(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Image-1
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={image1}
              onChange={(event) => setImage1(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="name"
            className="flex justify-start text-sm font-medium text-gray-700 undefined"
          >
            Image-2
          </label>
          <div className="flex flex-col items-start">
            <input
              type="text"
              // name="name"
              value={image2}
              onChange={(event) => setImage2(event.target.value)}
              className="input-group border-2 border-gray-400 rounded-lg h-8 mt-2"
            />
          </div>
        </div>
    </div>

    <button className="mx-auto mt-4 btn bg-orange-400 w-36" onClick={() => AddDish(category)}>Add Item</button>
    <ToastContainer />
    </div>
  )
}
