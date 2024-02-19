import React, { FC } from "react";
import PageWithLayoutType from "../../src/types/pageWithLayout";
import HomeLayout from "../../src/layouts/home.layout";
import Link from "next/link";

const NameAndLogo: FC = () => {
  return (
    <>
      <header className="bg-gradient-dark">
        <div
          className="page-header min-vh-75"
          style={{ backgroundImage: "url('../assets/img/bg21.jpg)" }}
        >
          <span className="mask bg-gradient-info opacity-8"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 mt-5 text-center mx-auto my-auto">
                <h1 className="text-white">Work with an amazing team</h1>
                <p className="lead mb-4 text-white opacity-9">
                  We’re constantly trying to express ourselves and actualize our
                  dreams. If you have the opportunity to play this game
                </p>
                <button
                  type="submit"
                  className="btn bg-white text-dark shadow-none"
                >
                  Create Account
                </button>
                <h6 className="text-white mb-2 mt-5">Find us on</h6>
                <div className="d-flex justify-content-center">
                  <Link href="#">
                    <i className="fab fa-facebook text-lg text-white me-4"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-instagram text-lg text-white me-4"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter text-lg text-white me-4"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-google-plus text-lg text-white"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="py-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="row justify-content-start">
                <div className="col-md-6">
                  <div className="info">
                    <i className="ni ni-album-2 h3 text-info"></i>
                    <h5>Fully integrated</h5>
                    <p>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info mb-6">
                    <i className="ni ni-atom h3 text-info"></i>
                    <h5>Payments functionality</h5>
                    <p>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-md-6">
                  <div className="info mb-6">
                    <i className="ni ni-watch-time h3 text-info"></i>
                    <h5>Prebuilt components</h5>
                    <p>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info">
                    <i className="ni ni-collection h3 text-info"></i>
                    <h5>Improved platform</h5>
                    <p>
                      We get insulted by others, lose trust for those We get
                      back freezes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
              <div className="card shadow">
                <div className="card-header p-0 position-relative z-index-1">
                  <img
                    src="../assets/img/project15.jpg"
                    alt="img-blur-shadow"
                    className="img-fluid border-radius-lg border-radius-bottom-start-0 border-radius-bottom-end-0"
                  />
                </div>
                <div className="card-body">
                  <Link href="#">
                    <h5 className="mt-3">Get insights on Search</h5>
                  </Link>
                  <p>
                    Website visitors today demand a frictionless user
                    expericence — especially when using search. Because of the
                    hight standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-7 position-relative bg-gray-200">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-start mb-5 mt-5">
              <h3 className="z-index-1 position-relative">
                The Executive Team
              </h3>
              <p className="opacity-8 mb-0">
                There’s nothing I really wanted to do in life that I wasn’t able
                to get good at. That’s my skill.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="card card-profile overflow-hidden">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <Link href="#">
                      <div className="pe-md-0">
                        <img
                          className="w-100 border-radius-lg border-radius-top-end-0 border-radius-bottom-end-0"
                          src="../assets/img/emily.jpg"
                          alt="image"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div className="card-body">
                      <h5 className="mb-0">Emma Roberts</h5>
                      <h6 className="text-info">UI Designer</h6>
                      <p className="mb-0">
                        Artist is a term applied to a person who engages in an
                        activity deemed to be an art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card card-profile mt-lg-0 mt-5 overflow-hidden">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <Link href="#">
                      <div className="pe-md-0">
                        <img
                          className="w-100 border-radius-lg border-radius-top-end-0 border-radius-bottom-end-0"
                          src="../assets/img/emilyz.jpg"
                          alt="image"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div className="card-body">
                      <h5 className="mb-0">Sofia Garcia</h5>
                      <h6 className="text-info">Marketing</h6>
                      <p>
                        Artist is a term applied to a person who engages in an
                        activity deemed to be an art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 col-12">
              <div className="card card-profile overflow-hidden z-index-2">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <Link href="#">
                      <div className="pe-md-0">
                        <img
                          className="w-100 border-radius-lg border-radius-top-end-0 border-radius-bottom-end-0"
                          src="../assets/img/michael.jpg"
                          alt="image"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div className="card-body">
                      <h5 className="mb-0">Ivan Flow</h5>
                      <h6 className="text-info">Developer</h6>
                      <p>
                        Artist is a term applied to a person who engages in an
                        activity deemed to be an art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="card card-profile mt-lg-0 mt-5 overflow-hidden z-index-2">
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-12 pe-lg-0">
                    <Link href="#">
                      <div className="pe-md-0">
                        <img
                          className="w-100 border-radius-lg border-radius-top-end-0 border-radius-bottom-end-0"
                          src="../assets/img/james.jpg"
                          alt="image"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="col-lg-8 col-md-6 col-12 ps-lg-0 my-auto">
                    <div className="card-body">
                      <h5 className="mb-0">William Pearce</h5>
                      <h6 className="text-info">JS Developer</h6>
                      <p>
                        Artist is a term applied to a person who engages in an
                        activity deemed to be an art.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-gray-200" id="count-stats">
        <div className="container">
          <div className="row mb-7">
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="../assets/img/logos/gray-logos/logo-coinbase.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="../assets/img/logos/gray-logos/logo-nasa.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="../assets/img/logos/gray-logos/logo-netflix.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="../assets/img/logos/gray-logos/logo-pinterest.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="../assets/img/logos/gray-logos/logo-spotify.svg"
                alt="logo"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 mb-4">
              <img
                className="w-100 opacity-7"
                src="../assets/img/logos/gray-logos/logo-vodafone.svg"
                alt="logo"
              />
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-3">
              <h1 className="text-info" id="state1">
                0
              </h1>
              <h5>Projects</h5>
              <p>
                Of “high-performing” level are led by a certified project
                manager
              </p>
            </div>
            <div className="col-md-3">
              <h1 className="text-info">
                <span id="state2">0</span>+
              </h1>
              <h5>Hours</h5>
              <p>That meets quality standards required by our users</p>
            </div>
            <div className="col-md-3">
              <h1 className="text-info">
                <span id="state3">0</span>/7
              </h1>
              <h5>Support</h5>
              <p>Actively engage team members that finishes on time</p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h4>Be the first to see the news</h4>
              <p className="mb-4">
                Your company may not be in the software business, but
                eventually, a software company will be in your business.
              </p>
              <div className="row">
                <div className="col-8 ms-auto">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control mb-sm-0"
                      placeholder="Email Here..."
                    />
                  </div>
                </div>
                <div className="col-3 ps-0 text-left">
                  <button
                    type="button"
                    className="btn bg-gradient-dark mb-0 h-100 position-relative z-index-2"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

(NameAndLogo as PageWithLayoutType).layout = HomeLayout;

export default NameAndLogo;
