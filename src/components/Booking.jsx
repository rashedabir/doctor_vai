import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const data = useSelector((state) => state.service);
  const newDate = new Date();
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const fullDate = `${date}/${month}/${year}`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Appointment Booked");
  };

  return (
    <div className="container text-center mx-auto py-4 border my-5 booking">
      <ToastContainer />
      <h3 className="mb-3"> {data.heading} </h3>
      <form onSubmit={handleSubmit}>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            required
            placeholder="Number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <label for="floatingInput">Number</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            required
            id="floatingInput"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Appoinment Date"
            value={fullDate}
            disabled
          />
          <label for="floatingInput">Appoinment Date</label>
        </div>
        <button type="submit" className="btn btn-info">
          submit
        </button>
      </form>
    </div>
  );
}

export default Booking;
