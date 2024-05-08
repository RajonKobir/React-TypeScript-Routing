import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Common from "./Common";
import tec from "./img/tec.gif";

const Carousel = ({ images }) => {
  return (
  <div className="container pt-5 pb-5">
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



const About = () => {
  const images = [
    'https://media.licdn.com/dms/image/D4D12AQHzUOd6Mn8Hlg/article-cover_image-shrink_720_1280/0/1694843206845?e=2147483647&v=beta&t=4P-BFiv18p4Ghj9QJKRYZiWTtIASTcJpVILE3_OirpM',
    'https://img.lovepik.com/photo/48008/6386.jpg_wh860.jpg',
    'https://i.ytimg.com/vi/yY1VIOpNyQ0/maxresdefault.jpg',
  ];
  return (
    <>

      <Header />

      <Common
        name="Welcome to About page"
        imgsrc={tec}
        visit="/contact"
        btnName="Contact us"
      />
      <Carousel images={images} />

      <Footer />

    </>
  );
};

export default About;
