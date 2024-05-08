import React from "react";


const Footer = () => {

  return (
    <>
      <footer className="footer flex-column mt-auto py-5 bg-dark text-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-4 text-center">
              <h5>Contact Us</h5>
              <p>123 Street Name, City, Country</p>
              <p>Email: example@example.com</p>
              <p>Phone: +123456789</p>
              <p>Business Hours: Mon-Fri, 9am-5pm</p>
            </div>
            <div className="col-md-4 text-center">
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h5>Widgets</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <a href="#">Archives</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Recent Posts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-3 ">
            <div className="offset-md-3 col-md-6 text-center">
              <h5>Subscribe to Our Newsletter</h5>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-light" type="button">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
