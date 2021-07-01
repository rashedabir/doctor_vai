import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setServiceName } from "../actions/doctorListAction";

function AppoimmentCard({ data }) {
  const { heading, schedule } = data;
  const dispatch = useDispatch();

  const saveService = () => {
    dispatch(setServiceName(data));
  };

  return (
    <div className="col-sm-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{heading}</h5>
          <p className="card-text">{schedule}</p>
          <Link onClick={saveService} to="/booking" className="btn btn-danger">
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AppoimmentCard;
