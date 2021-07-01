import React, { useState } from "react";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import doctor from "../utils/doctor1.jpg";
import AppoimmentCard from "./AppoimmentCard";
import { useSelector } from "react-redux";

function Appoinment() {
  const data = useSelector((state) => state.doctorList);
  const today = new Date().getDate().toString();
  const year = new Date().getFullYear().toString();
  const [search, setSearch] = useState("");

  const handleSearch = data.filter((data) => {
    return data.heading.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="container py-5">
      <div className="row flex-column-reverse flex-lg-row align-items-center">
        <div className="col-lg-6 text-left justify-content-center mx-auto my-3">
          <h3 className="mb-3">Appoinment</h3>
          <CalendarComponent id="calendar" />
        </div>
        <div className="col-lg-6">
          <img width="100%" src={doctor} alt="doctor" />
        </div>
      </div>
      <div className="apointment_list">
        <div className="mt-5 mb-3 row align-items-center">
          <h3 className="col-lg-8">
            Available Appointments on {today}, {year}
          </h3>
          <div className="col-lg-4">
            <div class="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <label for="floatingInput">Search</label>
            </div>
          </div>
        </div>
        <div className="row">
          {handleSearch.map((data) => (
            <AppoimmentCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appoinment;
