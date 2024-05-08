import React from "react";
import { Link } from "react-router-dom";
import web from "./img/web.gif"
import android from "./img/android.gif";
import gd from "./img/gd.gif";
import dm from "./img/dml.gif"
import ml from "./img/Machine-Learning.gif";
import datamining from "./img/data_mining.gif";


function ServicesComponent() {
  return (
    <>

      <section className='services_section pb-5'>
      <div className='my-5'>
        <h1 className='text-center'> Our Services</h1>
      </div>
      <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={web} className="card-img-top img-fluid" style={{ height: '300px' }} alt="Web Development" />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Web development encompasses building, designing, and maintaining websites. It involves coding languages, frameworks, and tools to create dynamic online platforms.</p>
                <Link to='/about' className="btn btn-primary">Learn More</Link>'
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={android} className="card-img-top img-fluid" style={{ height: '300px' }} alt="App Development" />
              <div className="card-body">
                <h5 className="card-title">App Development</h5>
                <p className="card-text">Android development involves creating applications for devices running the Android operating system. It utilizes Java or Kotlin programming languages and Android Studio IDE.</p>
                <Link to='/about' className="btn btn-primary">Learn More</Link>'
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={gd} className="card-img-top img-fluid" style={{ height: '300px' }} alt="Graphic Design" />
              <div className="card-body">
                <h5 className="card-title">Graphic Design</h5>
                <p className="card-text">Graphic design involves creating visual content to communicate messages. It encompasses various elements like typography, color theory, and layout design.</p>
                <Link to='/about' className="btn btn-primary">Learn More</Link>'
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={dm} className="card-img-top img-fluid" style={{ height: '300px' }} alt="Digital Marketing" />
              <div className="card-body">
                <h5 className="card-title">Digital Marketing</h5>
                <p className="card-text">Digital marketing involves promoting products or services using digital channels such as social media, email, and search engines. It aims to reach and engage target audiences online.</p>
                <Link to='/about' className="btn btn-primary">Learn More</Link>'
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={ml} className="card-img-top img-fluid" style={{ height: '300px' }} alt="Digital Marketing" />
              <div className="card-body">
                <h5 className="card-title">Machine Learning</h5>
                <p className="card-text">Digital marketing involves promoting products or services using digital channels such as social media, email, and search engines. It aims to reach and engage target audiences online.</p>
                <Link to='/about' className="btn btn-primary">Learn More</Link>'
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100">
              <img src={datamining} className="card-img-top img-fluid" style={{ height: '300px' }} alt="Digital Marketing" />
              <div className="card-body">
                <h5 className="card-title">Data Mining</h5>
                <p className="card-text">Digital marketing involves promoting products or services using digital channels such as social media, email, and search engines. It aims to reach and engage target audiences online.</p>
                <Link to='/about' className="btn btn-primary">Learn More</Link>'
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>
      
    </>
  )
}


export default ServicesComponent;