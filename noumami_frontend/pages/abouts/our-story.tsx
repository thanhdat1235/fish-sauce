import React, { FC } from "react";
import PageWithLayoutType from "../../src/types/pageWithLayout";
import HomeLayout from "../../src/layouts/home.layout";
import Link from "next/link";

const OurStory: FC = () => {
  return (
    <>
      <header className="bg-gradient-dark">
        <div
          className="page-header min-vh-75"
          style={{ backgroundImage: "url('/assets/img/bg9.jpg')" }}
        >
          <span className="mask bg-gradient-dark opacity-6"></span>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center mx-auto my-auto">
                <h1 className="text-white">
                  Work with an amazing{" "}
                  <span className="text-white" id="typed"></span>
                </h1>
                <div id="typed-strings">
                  <h1>team</h1>
                  <h1>design</h1>
                  <h1>tool</h1>
                </div>
                <p className="lead mb-4 text-white opacity-8">
                  We’re constantly trying to express ourselves and actualize our
                  dreams. If you have the opportunity to play this game
                </p>
                <button type="submit" className="btn bg-white text-dark">
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
      <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
        <section className="py-7">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="row justify-content-start">
                  <div className="col-md-6">
                    <div className="info">
                      <i className="material-icons text-3xl text-gradient text-info mb-3">
                        public
                      </i>
                      <h5>Fully integrated</h5>
                      <p>
                        We get insulted by others, lose trust for those We get
                        back freezes
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info">
                      <i className="material-icons text-3xl text-gradient text-info mb-3">
                        payments
                      </i>
                      <h5>Payments functionality</h5>
                      <p>
                        We get insulted by others, lose trust for those We get
                        back freezes
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-start mt-4">
                  <div className="col-md-6">
                    <div className="info">
                      <i className="material-icons text-3xl text-gradient text-info mb-3">
                        apps
                      </i>
                      <h5>Prebuilt components</h5>
                      <p>
                        We get insulted by others, lose trust for those We get
                        back freezes
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info">
                      <i className="material-icons text-3xl text-gradient text-info mb-3">
                        3p
                      </i>
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
                <div className="card">
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <Link href="" className="d-block blur-shadow-image">
                      <img
                        src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="img-colored-shadow"
                        className="img-fluid border-radius-lg"
                      />
                    </Link>
                  </div>
                  <div className="card-body text-center">
                    <h5 className="font-weight-normal">
                      <Link href="#">Get insights on Search</Link>
                    </h5>
                    <p className="mb-0">
                      Website visitors today demand a frictionless user
                      expericence — especially when using search. Because of the
                      hight standards.
                    </p>
                    <button
                      type="button"
                      className="btn bg-gradient-info btn-sm mb-0 mt-3"
                    >
                      Find out more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-5 position-relative bg-gradient-dark mx-n3">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-start mb-5 mt-5">
                <h3 className="text-white z-index-1 position-relative">
                  The Executive Team
                </h3>
                <p className="text-white opacity-8 mb-0">
                  There’s nothing I really wanted to do in life that I wasn’t
                  able to get good at. That’s my skill.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="card card-profile mt-4">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-n5">
                      <Link href="#">
                        <div className="p-3 pe-md-0">
                          <img
                            className="w-100 border-radius-md shadow-lg"
                            src="/assets/img/team-5.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-6 col-12 my-auto">
                      <div className="card-body ps-lg-0">
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
                <div className="card card-profile mt-lg-4 mt-5">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-n5">
                      <Link href="#">
                        <div className="p-3 pe-md-0">
                          <img
                            className="w-100 border-radius-md shadow-lg"
                            src="/assets/img/bruce-mars.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-6 col-12 my-auto">
                      <div className="card-body ps-lg-0">
                        <h5 className="mb-0">William Pearce</h5>
                        <h6 className="text-info">Boss</h6>
                        <p className="mb-0">
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
                <div className="card card-profile mt-4 z-index-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-n5">
                      <Link href="#">
                        <div className="p-3 pe-md-0">
                          <img
                            className="w-100 border-radius-md shadow-lg"
                            src="/assets/img/ivana-squares.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-6 col-12 my-auto">
                      <div className="card-body ps-lg-0">
                        <h5 className="mb-0">Ivana Flow</h5>
                        <h6 className="text-info">Athlete</h6>
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
                <div className="card card-profile mt-lg-4 mt-5 z-index-2">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-n5">
                      <Link href="#">
                        <div className="p-3 pe-md-0">
                          <img
                            className="w-100 border-radius-md shadow-lg"
                            src="/assets/img/ivana-square.jpg"
                            alt="image"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="col-lg-8 col-md-6 col-12 my-auto">
                      <div className="card-body ps-lg-0">
                        <h5 className="mb-0">Marquez Garcia</h5>
                        <h6 className="text-info">JS Developer</h6>
                        <p className="mb-0">
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
        <section className="pt-4 pb-6" id="count-stats">
          <div className="container">
            <div className="row mb-7">
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <img
                  className="w-100 opacity-7"
                  src="/assets/img/logos/gray-logos/logo-coinbase.svg"
                  alt="logo"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <img
                  className="w-100 opacity-7"
                  src="/assets/img/logos/gray-logos/logo-nasa.svg"
                  alt="logo"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <img
                  className="w-100 opacity-7"
                  src="/assets/img/logos/gray-logos/logo-netflix.svg"
                  alt="logo"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <img
                  className="w-100 opacity-7"
                  src="/assets/img/logos/gray-logos/logo-pinterest.svg"
                  alt="logo"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <img
                  className="w-100 opacity-7"
                  src="/assets/img/logos/gray-logos/logo-spotify.svg"
                  alt="logo"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6 mb-4">
                <img
                  className="w-100 opacity-7"
                  src="/assets/img/logos/gray-logos/logo-vodafone.svg"
                  alt="logo"
                />
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-md-3">
                <h1 className="text-gradient text-info" id="state1">
                  0
                </h1>
                <h5>Projects</h5>
                <p>
                  Of “high-performing” level are led by a certified project
                  manager
                </p>
              </div>
              <div className="col-md-3">
                <h1 className="text-gradient text-info">
                  <span id="state2">0</span>+
                </h1>
                <h5>Hours</h5>
                <p>That meets quality standards required by our users</p>
              </div>
              <div className="col-md-3">
                <h1 className="text-gradient text-info">
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
              <div className="col-md-6 m-auto">
                <h4>Be the first to see the news</h4>
                <p className="mb-4">
                  Your company may not be in the software business, but
                  eventually, a software company will be in your business.
                </p>
                <div className="row">
                  <div className="col-8">
                    <div className="input-group input-group-outline">
                      <label className="form-label">Email Here...</label>
                      <input type="text" className="form-control mb-sm-0" />
                    </div>
                  </div>
                  <div className="col-4 ps-0">
                    <button
                      type="button"
                      className="btn bg-gradient-info mb-0 h-100 position-relative z-index-2"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ms-auto">
                <div className="position-relative">
                  <img
                    className="max-width-50 w-100 position-relative z-index-2"
                    src="/assets/img/macbook.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

(OurStory as PageWithLayoutType).layout = HomeLayout;

export default OurStory;
