import React, { useState, useEffect } from "react";
import Cart from "../Components/Cart";
import logo from "../images/logo.png";
import star from "../images/star.png";
import burger from "../images/burger.png";
import allcat from "../images/all.jpeg";
import southcat from "../images/south.jpg";
import chinesecat from "../images/chinese.jpg";
import shakescat from "../images/shakes.jpg";
import sweetscat from "../images/sweets.jpg";
import burgerscat from "../images/burgers.jpeg";
import pizzascat from "../images/pizzas.jpg";
// import chinese from "../images/chinese.jpg";
import northcat from "../images/north.jpg";
import food1 from "../images/3.jpg";
import { IoIosArrowDown } from "react-icons/io";
import RecipesData from "../recipesData.json";
import Modal from "../Components/Modal";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate, Link,useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Menu({ userDetails }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [AllDishes, setAllDishes] = useState([]);
  const [vegetarianDishes, setVegetarianDishes] = useState([]);
  const [nonvegDishes, setNonvegDishes] = useState([]);
  const [northindianDishes, setnorthindianDishes] = useState([]);
  const [southindianDishes, setsouthindianDishes] = useState([]);
  const [chinese, setChinese] = useState([]);
  const [sweets, setSweets] = useState([]);
  const [shakes, setShakes] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [pizzas, setPizzas] = useState([]);


  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [price0, setPrice0] = useState(0);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [price3, setPrice3] = useState(0);
  const [price4, setPrice4] = useState(0);

  const [selectedCategory, setSelectedCategory] = useState(0);

  const AllDishesCollectionRef = collection(db, "alldishes");
  const vegCollectionRef = collection(db, "vegetarian");
  const chineseCollectionRef = collection(db, "chinese");
  const sweetsCollectionRef = collection(db, "sweets");
  const shakesCollectionRef = collection(db, "shakes");
  const burgersCollectionRef = collection(db, "burgers");
  const pizzasCollectionRef = collection(db, "pizzas");
  const ordersCollectionRef = collection(db, "orders");
  const nonvegCollectionRef = collection(db, "nonvegetarian");
  const northindianCollectionRef = collection(db, "north-indian");
  const southindianCollectionRef = collection(db, "south-indian");

  const array = [
    AllDishes,
    northindianDishes,
    southindianDishes,
    chinese,
    sweets,
    burgers,
    pizzas,
    shakes,
    vegetarianDishes,
    nonvegDishes,
  ];

  useEffect(() => {
    const getAllDishes = async () => {
      const data = await getDocs(AllDishesCollectionRef);
      setAllDishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getVegDishes = async () => {
      const data = await getDocs(vegCollectionRef);
      setVegetarianDishes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const getNonVegDishes = async () => {
      const data = await getDocs(nonvegCollectionRef);
      setNonvegDishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getNorthIndianDishes = async () => {
      const data = await getDocs(northindianCollectionRef);
      setnorthindianDishes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const getSouthIndianDishes = async () => {
      const data = await getDocs(southindianCollectionRef);
      setsouthindianDishes(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    const getChineseDishes = async () => {
      const data = await getDocs(chineseCollectionRef);
      setChinese(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getShakesDishes = async () => {
      const data = await getDocs(shakesCollectionRef);
      setShakes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getSweetsDishes = async () => {
      const data = await getDocs(sweetsCollectionRef);
      setSweets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getBurgersDishes = async () => {
      const data = await getDocs(burgersCollectionRef);
      setBurgers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getPizzasDishes = async () => {
      const data = await getDocs(pizzasCollectionRef);
      setPizzas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllDishes();
    getVegDishes();
    getNonVegDishes();
    getNorthIndianDishes();
    getSouthIndianDishes();
    getPizzasDishes();
    getBurgersDishes();
    getSweetsDishes();
    getShakesDishes();
    getChineseDishes();
  }, []);

  const handleCategoryClick = (catname) => {
    setSelectedCategory(catname);
  };

  const [orders, setOrders] = useState([]);

  const [quantity0, setQuantity0] = useState(1);
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [quantity3, setQuantity3] = useState(1);
  const [quantity4, setQuantity4] = useState(1);

  const [openBookingModal, setOpenBookingModal] = useState(false);

  const addData = (recipe) => {
    setOrders([
      ...orders,
      {
        name: recipe.name,
        price: recipe.price,
        diet: recipe.diet,
        image: recipe.image2,
        quantity: 1,
        tablesBooked: [],
      },
    ]);
  };

  const [orderType, setOrderType] = useState("dinein");

  const [veg, setVeg] = useState(true);

  const Dinein = () => {
    setOrderType("dinein");
  };
  const TakeAway = () => {
    setOrderType("takeaway");
  };
  const changeVegType = () => {
    setVeg(!veg);
    if (veg == true) {
      setSelectedCategory(9);
    } else setSelectedCategory(8);
  };

  const handlePlusClick = (index, pr) => {
    index == 0
      ? setQuantity0(quantity0 + 1)
      : index == 1
      ? setQuantity1(quantity1 + 1)
      : index == 2
      ? setQuantity2(quantity2 + 1)
      : index == 3
      ? setQuantity3(quantity3 + 1)
      : setQuantity4(quantity4 + 1);
    setTotalPrice(priceArray[index] * pr + totalPrice);
  };

  const handleMinusClick = (index, pr) => {
    index == 0
      ? setQuantity0(quantity0 - 1)
      : index == 1
      ? setQuantity1(quantity1 - 1)
      : index == 2
      ? setQuantity2(quantity2 - 1)
      : index == 3
      ? setQuantity3(quantity3 - 1)
      : setQuantity4(quantity4 - 1);

    console.log(priceArray);

    setTotalPrice(totalPrice - priceArray[index] * pr);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  const placeOrder = async () => {
    if (userName.length >= 3 && userPhone.length === 10) {
      if (orders.length > 0) orders[0].quantity = quantity0;
      if (orders.length > 1) orders[1].quantity = quantity1;
      if (orders.length > 2) orders[2].quantity = quantity2;
      if (orders.length > 3) orders[3].quantity = quantity3;
      if (orders.length > 4) orders[4].quantity = quantity4;

      var dishNames = orders.map((a) => a.name);
      var dishPrices = orders.map((a) => a.price);
      var dishQuantity = orders.map((a) => a.quantity);

      const user = await addDoc(ordersCollectionRef, {
        username: userName,
        userphone: userPhone,
        dishesname: dishNames.toString(),
        price: dishPrices.toString(),
        quantities: dishQuantity.toString(),
        useremail: location.state.email,
      });
      navigate("/orderbooked");
      console.log(orders);
    } else {
      console.log("Enter valid details");
      toast.error("Please Enter Valid Name and Phone Number");
    }
  };

  const [priceArray, setPriceArray] = useState([
    quantity0,
    quantity1,
    quantity2,
    quantity3,
    quantity4,
  ]);
  // const priceArray =

  return (
    <div className="bg-blue-200 w-screen h-screen">
      {openBookingModal == true ? (
        <Modal
          setOpenBookingModal={setOpenBookingModal}
          orders={orders}
          setOrders={setOrders}
          quantity0={quantity0}
          quantity1={quantity1}
          quantity2={quantity2}
          quantity3={quantity3}
          quantity4={quantity4}
          userName={userName}
          userPhone={userPhone}
          userEmail = {location.state.email}
          totalPrice = {totalPrice}
        />
      ) : (
        <div className="flex bg-white ">
          <div className=" w-full lg:w-[75%]">
            {/* NAVBAR */}
            <div className="navbar pt-4 bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li tabIndex={0}>
                      <a className="justify-between">
                        Parent
                        <svg
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                      </a>
                      <ul className="p-2">
                        <li>
                          <a>Submenu 1</a>
                        </li>
                        <li>
                          <a>Submenu 2</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Item 3</a>
                    </li>
                  </ul>
                </div>
                <img src={logo} className="h-12" alt="" />
              </div>
              {/* <div className="navbar-center hidden lg:flex">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Search"
                    className="input input-bordered"
                  />
                </div>
              </div> */}
              <div className="navbar-center">
                {/* <a className="btn">Get started</a> */}
                <div className="flex justify-center">
                  <button
                    className={` rounded-full btn mr-3 px-3 py-1 hover:cursor-pointer ${
                      veg === true
                        ? `bg-green-600 text-white hover:bg-green-600 hover:text-white `
                        : `bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800`
                    } `}
                    onClick={changeVegType}
                  >
                    Veg
                  </button>
                  <div
                    className={` rounded-full btn mr-3 px-3 py-1 hover:cursor-pointer ${
                      veg === false
                        ? `bg-red-600 text-white hover:bg-red-600 hover:text-white `
                        : `bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800`
                    } `}
                    onClick={changeVegType}
                  >
                    Non-Veg
                  </div>
                 
                </div>
               
              </div>

              <div className="navbar-end">
                {/* <a className="btn">Get started</a> */}
                <div className="flex justify-center">
                  <button
                    className="rounded-full btn mr-3 px-3 py-1 hover:cursor-pointer                
                    "
                    onClick={()=>navigate('/profile',{state: {name: location.state.name, email: location.state.email, phone: location.state.phone}})}
                  >
                    Profie
                  </button>
              
                 
                </div>
               
              </div>
            </div>

            <div className="divider p-2 m-0"></div>

            {/* CATEGORIES */}
            <div className="flex px-12 font-semibold justify-between text-xl mt-6">
              <h1>Find the Best Foods</h1>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-ghost">
                  Sort By
                  <IoIosArrowDown />
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-row-1 grid-flow-col  scrollbar-thin overflow-x-scroll mt-6  mx-10">
              <div
                className={`flex flex-col  pb-4 shadow-md ${
                  selectedCategory === 0 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(0);
                }}
              >
                <img
                  src={allcat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">All</h1>
              </div>
              <div
                className={`flex flex-col pb-4 shadow-sm  ${
                  selectedCategory === 1 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(1);
                }}
              >
                <img
                  src={northcat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">
                  North <br />
                  Indian{" "}
                </h1>
              </div>
              <div
                className={`flex flex-col  pb-4 shadow-sm  ${
                  selectedCategory === 2 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(2);
                }}
              >
                <img
                  src={southcat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">
                  South <br />
                  Indian
                </h1>
              </div>
              <div
                className={`flex flex-col pb-4 shadow-sm  ${
                  selectedCategory === 3 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(3);
                }}
              >
                <img
                  src={chinesecat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">Chinese</h1>
              </div>
              <div
                className={`flex flex-col  pb-4 shadow-sm ${
                  selectedCategory === 4 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(4);
                }}
              >
                <img
                  src={sweetscat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">Sweets</h1>
              </div>
              <div
                className={`flex flex-col pb-4 shadow-sm  ${
                  selectedCategory === 5 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(5);
                }}
              >
                <img
                  src={burgerscat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">Burgers</h1>
              </div>
              <div
                className={`flex flex-col pb-4 shadow-sm ${
                  selectedCategory === 6 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(6);
                }}
              >
                <img
                  src={pizzascat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">Pizzas</h1>
              </div>
              <div
                className={`flex flex-col pb-4 shadow-sm  ${
                  selectedCategory === 7 ? "bg-orange-100" : "bg-[#FFFAC7]"
                }  cursor-pointer w-20 p-2 mx-3 rounded-full border-2 border-orange-400`}
                onClick={() => {
                  setSelectedCategory(7);
                }}
              >
                <img
                  src={shakescat}
                  className="h-16 w-[70px] border-gray-400 border-2 rounded-full"
                  alt=""
                />
                <h1 className=" mt-2 font-semibold ">Shakes</h1>
              </div>
            </div>

            {/* ITEMS */}
            <div className="grid grid-cols-2 md:grid-cols-3 scrollbar-hide xl:grid-cols-4 gap-2 overflow-y-scroll h-[25.5rem] px-4 ml-4 mb-3 mt-12">
              {array[selectedCategory].map((recipe) => {
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
                        <button
                          onClick={() => addData(recipe)}
                          className="btn bg-[#FF3D00] btn-sm"
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            
          </div>

          {/* <Cart /> */}

          <div className="w-[25%] bg-white border-2 border-gray-300 border-t-0 flex flex-col ">
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
                  <h1 className="font-semibold">{location.state?.name}</h1>
                  <h2 className="text-gray-500">{location.state?.email}</h2>
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
                    orderType === "dinein"
                      ? `bg-orange-500 text-white hover:bg-orange-500 hover:text-white `
                      : `bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800`
                  } `}
                  onClick={Dinein}
                >
                  Dine-in
                </button>
                <div
                  className={` rounded-full btn mr-3 px-3 py-1 hover:cursor-pointer ${
                    orderType === "takeaway"
                      ? `bg-orange-500 text-white hover:bg-orange-500 hover:text-white `
                      : `bg-gray-100 text-gray-800 hover:bg-gray-100 hover:text-gray-800`
                  } `}
                  onClick={TakeAway}
                >
                  Take-away
                </div>
              </div>

              <div className="grid grid-cols-1 w-full h-72 mt-4 p-3 scrollbar-hide overflow-y-scroll bg-gray-100 rounded-xl">
                {orders ? (
                  orders.map((currOrder, i) => {
                    return (
                      <div
                        key={i}
                        className="flex w-full bg-white shadow-lg h-32 mb-3 p-2 rounded-xl"
                      >
                        <img
                          src={currOrder.image}
                          className="h-full rounded-lg"
                          alt=""
                        />

                        <div className="flex flex-col items-start ml-4">
                          <h1 className="font-semibold text-lg">
                            {currOrder.name}
                          </h1>
                          <h1 className="text-gray-400">
                            Price{" "}
                            <span className="ml-6 text-orange-400">
                              &#8377;{currOrder.price}
                            </span>
                          </h1>
                          <div className="flex mt-4 mx-auto">
                            <button
                              className="btn btn-circle hover:bg-orange-500 hover:text-white  btn-outline btn-sm bg-white text-black m-0 p-0"
                              onClick={() =>
                                handleMinusClick(i, currOrder.price)
                              }
                            >
                              -
                            </button>
                            <div className="bg-gray-100 border-0 w-8 border-gray-400 rounded-lg mx-2">
                              {i == 0
                                ? quantity0 - 1
                                : i == 1
                                ? quantity1 - 1
                                : i == 2
                                ? quantity2 - 1
                                : i == 3
                                ? quantity3 - 1
                                : quantity4 - 1}
                            </div>
                            <button
                              className="btn btn-circle btn-outline btn-sm hover:bg-orange-500 hover:text-white  bg-white text-black m-0 p-0"
                              onClick={() =>
                                handlePlusClick(i, currOrder.price)
                              }
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1>Your cart is empty</h1>
                )}
              </div>

              <div className="mt-8">
                <div className="flex justify-between">
                  <h1 className="font-semibold">Items</h1>
                  <h1>&#8377;{totalPrice}</h1>
                </div>
                <div className="flex justify-between">
                  <h1 className="font-semibold">Tax</h1>
                  <h1>&#8377;13.45</h1>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                  <h1 className="font-bold">Total</h1>
                  <h1 className="font-bold text-orange-500">
                    &#8377;{totalPrice + 13.45}
                  </h1>
                </div>

                <div className="form-control my-4">
                  <label className="input-group  h-10">
                    <span>Name</span>
                    <input
                      type="text"
                      value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                      placeholder="Your Name"
                      className=" h-10 input input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group  h-10">
                    <span>Phone</span>
                    <input
                      type="text"
                      value={userPhone}
                      onChange={(event) => setUserPhone(event.target.value)}
                      placeholder="Phone No."
                      className="input  h-10 input-bordered"
                    />
                  </label>
                </div>
              </div>

              <div className="flex flex-col mt-[1rem]">
                <button
                  onClick={placeOrder}
                  className={` btn bg-orange-500 ${
                    orderType === "dinein" ? `hidden` : `visible`
                  }`}
                >
                  {" "}
                  Place Order{" "}
                </button>
                <button
                  onClick={() => setOpenBookingModal(true)}
                  className={` btn bg-orange-500 ${
                    orderType === "takeaway" ? `hidden` : `visible `
                  }`}
                >
                  {" "}
                  Book Table{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer footer-center p-10 bg-[#1F2937] text-[#F2F2F2] rounded">
        <div className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}
