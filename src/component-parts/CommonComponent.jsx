import React from "react";
import { Link } from "react-router-dom";

const CommonComponent = (props) => {
  return (
    <>
      <section className="common_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="home_section2_inner">
              <h1>
                {props.name} <br />
                <strong className="ml-3" style={{ color: "#5bc0de" }}>
                  Quivato
                </strong>
              </h1>
              <h2 className="my-3">
                We are the Team of talented developers making websites
              </h2>
              <div className="mt-5">
                <Link to={props.visit} className="btn btn-get-started">
                  {props.btnName}
                </Link>
              </div>
            </div>
            </div>

            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <img
                src={props.imgsrc}
                className="img-fluid"
                alt="home img"
              />
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default CommonComponent;