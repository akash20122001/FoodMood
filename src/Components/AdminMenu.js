import React,{useState, useEffect} from 'react'
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate, Link,useLocation } from "react-router-dom";

export default function AdminMenu() {
    const [AllDishes, setAllDishes] = useState([]);
    const AllDishesCollectionRef = collection(db, "alldishes");
    useEffect(() => {
        const getAllDishes = async () => {
          const data = await getDocs(AllDishesCollectionRef);
          setAllDishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }; 
        getAllDishes();
      }, []);

  return (
    <div>
        <div className="">
        <div className="grid grid-cols-2 md:grid-cols-3 scrollbar-hide xl:grid-cols-4 gap-2 overflow-y-scroll h-[25.5rem] px-4 ml-4 mb-3 mt-12">
              {AllDishes.map((recipe) => {
                return (
                  <div className="rounded-xl w-56 xl:w-60 px-4 h-[320px] bg-white border-gray-300 border-2 shadow-sm">
                    <figure className=" pt-4">
                      <img
                        src={recipe.image1}
                        alt="Shoes"
                        className="rounded-xl"
                      />
                    </figure>
                    <div className=" p-0 m-0 items-center  text-center">
                      <h2 className="text-xl font-semibold  p-0 mt-3">
                        {recipe.name}
                      </h2>
                      <div className="flex justify-center mb-0 mt-2 items-center">
                        {/* <img src={star} className="h-[15px] mr-2" alt="" />
                    <span> 4.7</span> */}
                        {recipe.diet === "vegetarian" ? (
                          <div className="badge text-white badge-success">
                            Veg
                          </div>
                        ) : (
                          <div className="badge text-white bg-red-400 border-0">
                            Non-veg
                          </div>
                        )}
                        <div className="badge bg-orange-400 ml-2 border-0">
                          {recipe.type}
                        </div>
                      </div>
                      <p className="text-sm mt-2 text-gray-400">
                        Cooking Time : {recipe.cooktime}
                        <span className="text-gray-700">
                          {/* {recipe.cook_time} */}
                        </span>
                      </p>
                      <div className="flex justify-center items-center p-0 mt-4">
                        <div className="flex flex-col items-start">
                          <h1 className="text-gray-600 text-sm">Price</h1>
                          <h1 className="text-gray-900 text-md font-semibold">
                            &#8377;{recipe.price}
                          </h1>
                        </div>
                        <div className="w-[1px] bg-gray-300 h-[30px] mx-6"></div>
                       
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
    </div>
  )
}
