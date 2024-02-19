import Head from "next/head";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <title>Noumami</title>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="page-header min-vh-75"
              style={{
                backgroundImage: "url(/assets/img/noumami/recipes/recips2.JPEG)",
              }}
            >
              <span className="mask bg-gradient-dark"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 my-auto mx-auto">
                    <h1 className="fadeIn2 fadeInBottom text-center font-dance text-4xl lg:text-6xl text-taste">
                      Taste & feel
                    </h1>
                    <p className="lead text-white opacity-8 fadeIn3 fadeInBottom font-dance text-2xl lg:text-7xl text-center">
                      First fermented norwegian fish sauce from salmon & cod
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="page-header min-vh-75"
              style={{
                backgroundImage: "url(/assets/img/noumami/banner/img2.JPG)",
              }}
            >
              <span className="mask bg-gradient-dark"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 my-auto mx-auto">
                    <h1 className="fadeIn2 fadeInBottom text-center font-dance text-4xl lg:text-6xl text-taste">
                      Our Team
                    </h1>
                    <p className="lead text-white opacity-8 fadeIn3 fadeInBottom font-dance text-2xl lg:text-7xl text-center">
                      Free people make free choices. Free choices mean you get
                      unequal outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="page-header min-vh-75"
              style={{
                backgroundImage: "url(/assets/img/noumami/banner/img3.jpg)",
              }}
            >
              <span className="mask bg-gradient-dark"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 my-auto mx-auto">
                    <h1 className="fadeIn2 fadeInBottom text-center font-dance text-4xl lg:text-6xl text-taste">
                      Work from home
                    </h1>
                    <p className="lead text-white opacity-8 fadeIn3 fadeInBottom font-dance text-2xl lg:text-7xl text-center">
                      You’re spending time to save money when you should be
                      spending money to save time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-vh-75 position-absolute w-100 top-0">
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon position-absolute bottom-50"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon position-absolute bottom-50"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
      <div className="container-fluid p-3 max-w-7xl w-full relative -mt-28">
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-sm-0 mb-4">
            <div className="info-horizontal bg-gradient-to-r bg-[#FFD44C] border-radius-lg p-4 grid grid-cols-4">
              <div className="col-span-1 w-24 h-48">
                <img
                  className="w-full h-full rounded-md"
                  src="/assets/img/noumami/products/product1.JPG"
                  alt="product"
                />
              </div>
              <div className="description ps-5 col-span-3">
                <h5 className="font-dance text-3xl text-[#101010] leading-8 font-semibold mb-3">
                  Pelagic fish sauce
                </h5>
                <p className="text-[#101010] mb-2 line-clamp-3">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever.
                </p>
                <a
                  href="#"
                  className="text-[#f05f3e] text-decoration-underline-hover"
                >
                  More about us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 px-lg-1">
            <div className="info-horizontal bg-gradient-to-r bg-[#e9c051] border-radius-lg p-4 grid grid-cols-4">
              <div className="col-span-1 w-24 h-48">
                <img
                  className="w-full h-full rounded-md"
                  src="/assets/img/noumami/products/product2.JPG"
                  alt="product"
                />
              </div>
              <div className="description ps-5 col-span-3">
                <h5 className="font-dance text-3xl text-[#101010] leading-8 font-semibold mb-3">
                  Salmon fish sauce
                </h5>
                <p className="text-[#101010] mb-2 line-clamp-3">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline-hover"
                >
                  More about us
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-4">
            <div className="info-horizontal bg-gradient-to-r bg-[#d6b353]  border-radius-lg p-4 grid grid-cols-4">
              <div className="col-span-1 w-24 h-48">
                <img
                  className="w-full h-full rounded-md"
                  src="/assets/img/noumami/products/product1.JPG"
                  alt="product"
                />
              </div>
              <div className="description ps-5 col-span-3">
                <h5 className="font-dance text-3xl text-[#101010] leading-8 font-semibold mb-3">
                  Cod fish sauce
                </h5>
                <p className="text-[#101010] mb-2 line-clamp-3">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever.
                </p>
                <a
                  href="#"
                  className="text-primary text-decoration-underline-hover"
                >
                  More about us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
