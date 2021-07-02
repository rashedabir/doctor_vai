import React, { useState } from "react";
import contact from "../utils/contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [messege, setMessege] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    toast.success("Message Sent");
  };

  return (
    <div className="container py-3 contact">
      <ToastContainer />
      <div className="row flex-column-reverse flex-lg-row align-items-center">
        <div className="col-lg-4">
          <h3 className="text-uppercase mb-3">contact details</h3>
          {contact.map((contact) => (
            <div key={contact.id} className="card mb-4">
              <div className="card-header"> {contact.heading} </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    <i className={contact.icon}></i> {contact.detail}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-8">
          <div className="p-4 text-center mx-auto border my-5">
            <h3 className="mb-3">Sent Message</h3>
            <form onSubmit={handleContact}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Name"
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  required
                  placeholder="Subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
                <label for="floatingInput">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  required
                  id="floatingInput"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label for="floatingInput">Email</label>
              </div>
              <div class="form-floating">
                <textarea
                  className="form-control mb-3"
                  placeholder="Leave a Message here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                  onChange={(e) => {
                    setMessege(e.target.value);
                  }}
                ></textarea>
                <label for="floatingTextarea2">Message</label>
              </div>
              <button type="submit" className="btn btn-danger">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
