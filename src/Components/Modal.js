import React, { useState } from "react";
import medTable from "../images/medTable.png";
import medTableBooked from "../images/medTableBooked.png";
import medTableSelected from "../images/medTableSelected.png";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import bigTableBooked from "../images/tableBigBooked.png";
export default function Modal({
  setOpenBookingModal,
  orders,
  setOrders,
  quantity0,
  quantity1,
  quantity2,
  quantity3,
  quantity4,
  userName,
  userPhone,
  userEmail,
  totalPrice,
}) {
  const navigate = useNavigate();
  // const location = useLocation();

  const [tables, setTables] = useState([
    "prevBooked",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "prevBooked",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
    "prevBooked",
    "unbook",
    "unbook",
    "unbook",
    "unbook",
  ]);

  const bookTable = (index) => {
    const newtables = [...tables];
    if (newtables[index] === "prevBooked") {
      // newtables[index] = "unbook"
    } else if (newtables[index] === "book") {
      newtables[index] = "unbook";
    } else if (newtables[index] === "unbook") {
      newtables[index] = "book";
    }
    setTables(newtables);
    console.log(tables);
  };

  const ordersCollectionRef = collection(db, "orders");

  const [bookedTables, setBookedTables] = useState([]);

  const updateTablesList = (index) => {
    if (bookedTables.some((bookedTable) => bookedTable.number === index)) {
      const newList = bookedTables.filter(
        (bookedTable) => bookedTable.number !== index
      );

      setBookedTables([newList]);
    } else {
      setBookedTables([
        ...bookedTables,
        {
          number: index,
        },
      ]);
    }
  };

  const gotoPaymentsPage = () => {
    if (orders.length > 0) orders[0].quantity = quantity0;
    if (orders.length > 1) orders[1].quantity = quantity1;
    if (orders.length > 2) orders[2].quantity = quantity2;
    if (orders.length > 3) orders[3].quantity = quantity3;
    if (orders.length > 4) orders[4].quantity = quantity4;
    console.log(orders);

    var dishNames = orders.map((a) => a.name);
    var dishPrices = orders.map((a) => a.price);
    var dishQuantity = orders.map((a) => a.quantity);
    var tablesBooking = bookedTables.map((a) => a.number);

    navigate("/payment", {
      state: {
        name: userName,
        phone: userPhone,
        email: userEmail,
        dishesname: dishNames.toString(),
        price: dishPrices.toString(),
        tables: tablesBooking.toString(),
        quantities: dishQuantity.toString(),
        totalprice: totalPrice,
        visitDate: visitDate,
        visitTime: visitTime
      },
    });
  };

  const [visitTime, setVisitTime] = useState("");
  const [visitDate, setVisitDate] = useState("");

  const completeBooking = async () => {
    const user = await addDoc(ordersCollectionRef, {
      username: userName,
      userphone: userPhone,
      dishesname: dishNames.toString(),
      price: dishPrices.toString(),
      tables: tablesBooking.toString(),
      quantities: dishQuantity.toString(),
      useremail: userEmail,
      totalprice: totalPrice,
    });
    console.log(orders);
    toast.success("Booking Done Successfully !");
    console.log(bookedTables);
    navigate("/orderbooked");

    if (orders.length > 0) orders[0].quantity = quantity0;
    if (orders.length > 1) orders[1].quantity = quantity1;
    if (orders.length > 2) orders[2].quantity = quantity2;
    if (orders.length > 3) orders[3].quantity = quantity3;
    if (orders.length > 4) orders[4].quantity = quantity4;
    console.log(orders);

    var dishNames = orders.map((a) => a.name);
    var dishPrices = orders.map((a) => a.price);
    var dishQuantity = orders.map((a) => a.quantity);
    var tablesBooking = bookedTables.map((a) => a.number);

    setOpenBookingModal(false);
    console.log(orders);
  };

  return (
    <div className="w-screen flex flex-col justify-center items-center h-screen bg-gray-100 ">
      <div className="mb-3 font-bold text-xl">Book your table in advance</div>
      <div className="w-[70%] h-[90%] flex  p-12 bg-orange-100 rounded-xl border-[4px] border-orange-400">
        <div className="mr-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-sm">Date of visit</span>
              <span className="label-text-alt">(DD-MM-YY)</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={visitDate}
              onChange={(event)=>setVisitDate(event.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-sm">Time of visit</span>
              <span className="label-text-alt">(Hr:Min)</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              value={visitTime}
              onChange={(event)=>setVisitTime(event.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            
          </div>
        </div>
        {/* <button className="btn">HELLLOO</button> */}
        <div className="grid grid-rows-5 grid-flow-col bg-white border-4 border-black p-6 rounded-xl gap-2  mx-auto">
          {tables.map((table, index) => {
            return (
              <div
                key={index}
                onClick={() => bookTable(index)}
                className="  w-28 rounded-lg h-28"
              >
                {table === "prevBooked" ? (
                  <button className="btn btn-lg btn-disabled">
                    Table {index + 1}
                  </button>
                ) : (
                  <button
                    className={`btn btn-lg ${
                      table === "book" ? "bg-green-400" : "bg-red-400"
                    } `}
                    onClick={() => updateTablesList(index)}
                  >
                    Table {index + 1}
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex bg-white overflow-y-scroll  rounded-xl border-[3px] border-gray-800 justify-end flex-col">
          {bookedTables.map((bookedTable, index) => {
            return (
              <div
                key={index}
                className="  w-72 px-8  text-green-700 rounded-full border-2 bg-gray-300 m-4"
              >
                <h1 className="font-bold bg- text-green-700">
                  {" "}
                  Table number {bookedTable.number + 1} booked
                </h1>
              </div>
            );
          })}
          <button
            className="btn bg-orange-400 mx-3 mb-3"
            onClick={gotoPaymentsPage}
          >
            Book Tables
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
