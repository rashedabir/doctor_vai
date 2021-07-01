import React from "react";
import { Link } from "react-router-dom";
import doctor from "../utils/doctor.jpg";

function Home() {
  return (
    <div className="container py-5 text-left mx-auto home">
      <div className="row flex-column-reverse flex-lg-row align-items-center">
        <div className="col-lg-6">
          <div className="py-3">
            <h2>You New Smile Starts Here</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <Link to="/appoinment">
            <button className="btn btn-success text-uppercase">
              get appoinment
              <i className="fas fa-calendar-check mx-2"></i>
            </button>
          </Link>
        </div>
        <div className="col-lg-6 text-center mx-auto">
          <img width="85%" src={doctor} alt="doctor" />
        </div>
      </div>
    </div>
  );
}

export default Home;
