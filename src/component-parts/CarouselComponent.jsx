import React from "react";


const CarouselComponent = () => {

    const CarouselComponent = ({ images }) => {
        return (
        <div className="container pt-3 pb-5">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              {images.map((image, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} style={{ maxHeight: '450px', width: 'auto' }} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        );
      };

  return (
    <>
      <CarouselComponent images={[
        'https://t4.ftcdn.net/jpg/05/02/15/49/360_F_502154918_DJRLI4Q6bnW6V3zFGaHvzozUOfSlXQ5m.jpg',
        'https://img-b.udemycdn.com/course/750x422/4874706_df52_4.jpg',
        'https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg',
      ]} />
    </>
  );
};

export default CarouselComponent;