import React from "react";

function Footer() {
  return (
    <footer className="justify-content-between px-4 align-items-center">
      <div className="row">
        <div className="mt-3 col-lg-4 text-center">
          <h6>Doctor Vai</h6>
        </div>
        <div className="mt-3 col-lg-4 text-center">
          <p>
            Developed by{" "}
            <a
              href="https://rashed-abir.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Rashed Abir
            </a>
          </p>
        </div>
        <div className="mt-3 social_icon col-lg-4 text-center">
          <i className="fab fa-facebook-square mx-1"></i>
          <i className="fab fa-linkedin mx-1"></i>
          <i className="fab fa-instagram-square mx-1"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
