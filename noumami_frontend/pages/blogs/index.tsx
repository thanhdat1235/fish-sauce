import React, { FC } from "react";
import PageWithLayoutType from "../../src/types/pageWithLayout";
import HomeLayout from "../../src/layouts/home.layout";
import { GetServerSideProps } from "next";
import blogService from "../../src/services/blogService/blogService";
import Link from "next/link";

const Blog: FC = () => {
  return (
    <>
      <header>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div
                className="page-header min-vh-75"
                style={{ backgroundImage: "url(/assets/img/bg10.jpg)" }}
              >
                <span className="mask bg-gradient-dark"></span>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 my-auto">
                      <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                        Discover Stories
                      </h4>
                      <h1 className="text-white fadeIn2 fadeInBottom">
                        A Place for Entrepreneurs to Share
                      </h1>
                      <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        Wealth creation is an evolutionarily recent positive-sum
                        game. Status is an old zero-sum game. Those attacking
                        wealth creation are often just seeking status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg mt-n5 mx-4 mb-4">
                <div className="card-body">
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                        <div className="info-horizontal bg-gradient-primary border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-white">
                            shuffle
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5 className="text-white">
                              Netflix's 'Shuffle Play' feature
                            </h5>
                            <p className="text-white pe-0 pe-lg-5">
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-white icon-move-right"
                            >
                              More about us
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 px-lg-1">
                        <div className="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-gradient text-primary">
                            redeem
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5>Landbot closes $8M Series</h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-primary icon-move-right"
                            >
                              More about us
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mt-lg-0 mt-4">
                        <div className="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-gradient text-primary">
                            bookmarks
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5>Brave web browser</h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-primary icon-move-right"
                            >
                              More about us
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="page-header min-vh-75"
                style={{ backgroundImage: "url(/assets/img/dg2.jpg)" }}
              >
                <span className="mask bg-gradient-dark"></span>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 my-auto">
                      <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                        Our Team
                      </h4>
                      <h1 className="text-white fadeIn2 fadeInBottom">
                        Work with the best
                      </h1>
                      <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        Free people make free choices. Free choices mean you get
                        unequal outcomes. You can have freedom, or you can have
                        equal outcomes. You can’t have both.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg mt-n5 mx-4 mb-4">
                <div className="card-body">
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                        <div className="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-gradient text-info">
                            shuffle_on
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5>Netflix's 'Shuffle Play' feature</h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-dark icon-move-right"
                            >
                              Learn more
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 px-lg-1">
                        <div className="info-horizontal info-horizontal bg-gradient-info border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-white">
                            beenhere
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5 className="text-white">
                              Landbot closes $8M Series
                            </h5>
                            <p className="text-white">
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-white icon-move-right"
                            >
                              Learn more
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mt-lg-0 mt-4">
                        <div className="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-gradient text-info">
                            ballot
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5>Brave web browser</h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-dark icon-move-right"
                            >
                              Learn more
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div
                className="page-header min-vh-75"
                style={{ backgroundImage: "url(/assets/img/dg3.jpg)" }}
              >
                <span className="mask bg-gradient-dark"></span>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 my-auto">
                      <h4 className="text-white mb-0 fadeIn1 fadeInBottom">
                        Office Places
                      </h4>
                      <h1 className="text-white fadeIn2 fadeInBottom">
                        Working on Wallstreet is Not So Easy
                      </h1>
                      <p className="lead text-white opacity-8 fadeIn3 fadeInBottom">
                        You’re spending time to save money when you should be
                        spending money to save time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card shadow-lg mt-n5 mx-4 mb-4">
                <div className="card-body">
                  <div className="container-fluid px-0">
                    <div className="row">
                      <div className="col-lg-4 col-sm-6 mb-sm-0 mb-4">
                        <div className="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-gradient text-danger">
                            tune
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5>Netflix's 'Shuffle Play' feature</h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-dark icon-move-right"
                            >
                              More about us
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-sm-6 px-lg-1">
                        <div className="info-horizontal border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-gradient text-danger">
                            settings_suggest
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5>Landbot closes $8M Series</h5>
                            <p>
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-dark icon-move-right"
                            >
                              More about us
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 mt-lg-0 mt-4">
                        <div className="info-horizontal bg-gradient-danger border-radius-xl p-4 d-block d-md-flex ">
                          <i className="material-icons text-3xl text-white">
                            compare
                          </i>
                          <div className="description ps-0 ps-md-3">
                            <h5 className="text-white">Brave web browser</h5>
                            <p className="text-white">
                              The Arctic Ocean freezes every winter and much of
                              the sea-ice then thaws every summer, and that
                              process will continue whatever.
                            </p>
                            <Link
                              href="#"
                              className="text-white icon-move-right"
                            >
                              More about us
                              <i className="fas fa-arrow-right text-sm ms-1"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-vh-75 position-absolute w-100 top-0">
            <Link
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
            </Link>
            <Link
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
            </Link>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <section className="py-5">
              <div className="card card-plain card-blog mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-image position-relative border-radius-lg">
                      <div className="blur-shadow-image">
                        <img
                          className="img border-radius-lg"
                          src="/assets/img/examples/blog-post-3.jpg"
                          alt="architecture"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 my-sm-auto mt-3 ms-sm-3">
                    <h4>
                      <Link href="#" className="text-dark">
                        Rover raised to $65 million
                      </Link>
                    </h4>
                    <p>
                      Finding temporary housing for your dog should be as easy
                      as renting an Airbnb. That’s the idea behind Rover, which
                      raised $65 million to expand its pet sitting{" "}
                      <Link href="#"> Read More </Link>
                    </p>
                    <div className="author">
                      <img
                        src="/assets/img/team-4.jpg"
                        alt="team-4"
                        className="avatar avatar-sm shadow me-2 border-radius-lg"
                      />
                      <p className="my-auto">Katie Roof</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-plain card-blog mt-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-image position-relative border-radius-lg">
                      <div className="blur-shadow-image">
                        <img
                          className="img border-radius-lg"
                          src="/assets/img/examples/blog-post-1.jpg"
                          alt="estate"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 my-sm-auto mt-3 ms-sm-3">
                    <h4>
                      <Link href="#" className="text-dark">
                        MateLabs mixes machine learning
                      </Link>
                    </h4>
                    <p>
                      If you’ve ever wanted to train a machine learning model
                      and integrate it with IFTTT, a new offering from MateLabs.
                      MateVerse, a platform where novices can spin out
                      machine... <Link href="#"> Read More </Link>
                    </p>
                    <div className="author">
                      <img
                        src="/assets/img/team-3.jpg"
                        alt="team-3"
                        className="avatar avatar-sm shadow me-2 border-radius-lg"
                      />
                      <p className="my-auto">John Mannes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-plain card-blog my-5">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-image position-relative border-radius-lg">
                      <div className="blur-shadow-image">
                        <img
                          className="img border-radius-lg"
                          src="/assets/img/examples/blog-post-2.jpg"
                          alt="buildings"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7 my-sm-auto mt-3 ms-sm-3">
                    <h4>
                      <Link href="#" className="text-dark">
                        US venture investment tricks
                      </Link>
                    </h4>
                    <p>
                      Venture investment in U.S. startups rose sequentially in
                      the second quarter of 2017, boosted by large, late-stage
                      financings and a few outsized early-stage rounds in tech
                      and healthcare.. <Link href="#"> Read More </Link>
                    </p>
                    <div className="author">
                      <img
                        src="/assets/img/team-2.jpg"
                        alt="team-2"
                        className="avatar avatar-sm shadow me-2 border-radius-lg"
                      />
                      <p className="my-auto">Devin Coldewey</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="card card-blog card-background">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1488901512066-cd403111aeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2378&q=80')",
                }}
              ></div>
              <div className="card-body body-left">
                <div className="content-left text-start">
                  <h2 className="card-title text-white">
                    Flexible office space means growing your team.
                  </h2>
                  <p className="card-description">
                    Rather than worrying about switching offices every couple
                    years, you can instead stay in the same location and grow-up
                    from your shared coworking space to an office that takes up
                    an entire floor.
                  </p>
                  <div className="author">
                    <img
                      src="/assets/img/team-2.jpg"
                      alt="..."
                      className="avatar mr-2"
                    />
                    <div className="name ms-2">
                      <span>Mathew Glock</span>
                      <div className="stats">
                        <small>Marketing Manager</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="pagination pagination-primary mt-4 ml-2">
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <i
                      className="fa fa-angle-double-left"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  2
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  4
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  5
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    ></i>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 ml-auto">
            <div className="pt-1 pb-5 position-sticky top-1 mt-lg-8 mt-5">
              <h4>Newsletter</h4>
              <p>
                Get access to subscriber exclusive deals and be the first who
                gets informed about fresh sales.
              </p>
              <div className="my-3">
                <div className="input-group input-group-outline mb-sm-0 mb-2">
                  <label className="form-label">Email email...</label>
                  <input type="email" className="form-control" />
                </div>
              </div>
              <button type="button" className="btn bg-gradient-primary">
                Subscribe
              </button>
              <h4 className="mt-5">Activity</h4>
              <Link href="javascript::">
                <div className="card justify-content-center mb-3">
                  <div className="card-body p-3">
                    <h6 className="mb-0">Top 50 Tips for Creative Tim</h6>
                    <p className="mb-0 text-body">Mar 08, 2020</p>
                  </div>
                  <div className="position-absolute end-0 me-3 ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </Link>
              <Link href="javascript::">
                <div className="card justify-content-center mb-3">
                  <div className="card-body p-3">
                    <h6 className="mb-0">Best ways to avoid the Burnout</h6>
                    <p className="mb-0 text-body">Aug 11, 2020</p>
                  </div>
                  <div className="position-absolute end-0 me-3 ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </Link>
              <Link href="javascript::">
                <div className="card justify-content-center mb-3">
                  <div className="card-body p-3">
                    <h6 className="mb-0">
                      Fascinating tactics to help your Business
                    </h6>
                    <p className="mb-0 text-body">Jan 07, 2021</p>
                  </div>
                  <div className="position-absolute end-0 me-3 ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </Link>
              <h4 className="mt-5">Top Stories</h4>
              <div className="card card-plain card-blog mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-image position-relative border-radius-lg">
                      <div className="blur-shadow-image">
                        <img
                          className="img border-radius-lg"
                          src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                          alt="curved11"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 my-sm-auto mt-3">
                    <h5>
                      <Link href="#" className="text-dark font-weight-normal">
                        MateLabs mixes machine learning
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card card-plain card-blog mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-image position-relative border-radius-lg">
                      <div className="blur-shadow-image">
                        <img
                          className="img border-radius-lg"
                          src="https://images.unsplash.com/photo-1599639932525-213272ff954b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1879&q=80"
                          alt="curved9"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 my-sm-auto mt-3">
                    <h5>
                      <Link href="#" className="text-dark font-weight-normal">
                        Mixes machine learning
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card card-plain card-blog mt-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-image position-relative border-radius-lg">
                      <div className="blur-shadow-image">
                        <img
                          className="img border-radius-lg"
                          src="https://images.unsplash.com/photo-1622480914645-8fa9b36178a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                          alt="curved8"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 my-sm-auto mt-3">
                    <h5>
                      <Link href="#" className="text-dark font-weight-normal">
                        MateLabs mixes machine learning
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
              <h4 className="mt-5 mb-4">Tags</h4>
              <span className="badge bg-light text-dark">Support</span>
              <span className="badge bg-light text-dark">Business</span>
              <span className="badge bg-light text-dark">Analytics</span>
              <span className="badge bg-light text-dark">Tutorials</span>
              <span className="badge bg-light text-dark mt-2">
                Sponsorships
              </span>
            </div>
          </div>
          <div className="col-12">
            <section className="py-5">
              <div className="container">
                <div className="row">
                  <div className="col-8 mx-auto text-center mb-5">
                    <span className="badge badge-info mb-2">Living</span>
                    <h2>A new way to buy your next home</h2>
                    <p>
                      If you can’t decide, the answer is no. If two equally
                      difficult paths, choose the one more painful in the short
                      term (pain avoidance is creating an illusion of equality).
                    </p>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-lg-3 col-md-6 position-relative mb-sm-0 mb-3">
                    <hr className="vertical dark d-md-block d-none" />
                    <h3 className="mb-3">
                      <Link href="#" className="text-darker">
                        Short Sentences Gives You the Liberty
                      </Link>
                    </h3>
                    <p className="mb-3">
                      Paradoxically, using more short sentences gives you the
                      liberty to write beautiful long sentences.
                    </p>
                    <p className="mb-3">
                      But in a way that&#39;s never been done before.
                    </p>
                    <div className="author">
                      <img
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-9.jpg"
                        alt="..."
                        className="avatar shadow border-radius-lg"
                      />
                      <div className="name ps-3 my-auto">
                        <p className="text-sm text-darker font-weight-bold mb-0">
                          Mathew Glock
                        </p>
                        <div className="stats">
                          <p className="text-xs text-secondary mb-0">Author</p>
                        </div>
                      </div>
                    </div>
                    <hr className="horizontal dark my-4" />
                    <h3 className="mb-3">
                      <Link href="#" className="text-darker">
                        5 Ways to Improve your Life.
                      </Link>
                    </h3>
                    <p className="mb-3">
                      Create first, edit second. Never do them at the same time.
                    </p>
                  </div>
                  <div className="col-lg-4 col-md-6 position-relative mb-sm-0 mb-3">
                    <hr className="vertical dark d-lg-block d-none" />
                    <div className="card card-plain">
                      <div className="card-header p-0 mx-lg-3 mt-3 position-relative z-index-1">
                        <Link href="#" className="d-block">
                          <img
                            src="/assets/img/examples/blog-9-4.jpg"
                            className="img-fluid border-radius-lg"
                          />
                        </Link>
                      </div>
                      <div className="card-body pt-3">
                        <h4 className="mb-3">
                          <Link
                            href="#"
                            className="text-darker font-weight-bolder"
                          >
                            How to Build a $24 Billion Dollar Company in Just 2
                            Years.
                          </Link>
                        </h4>
                        <p className="card-description mb-4">
                          I&#39;ve come to the conclusion that 50% of folks in
                          this world don&#39;t even spend enough time alone with
                          their thoughts to have their own opinions. They
                          haven&#39;t done the work to decide what they think.
                          And that isn&#39;t a rewarding way to live.
                        </p>
                        <div className="author">
                          <img
                            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/freedom.jpg"
                            alt="..."
                            className="avatar shadow border-radius-lg"
                          />
                          <div className="name ps-3 my-auto">
                            <p className="text-sm text-darker font-weight-bold mb-0">
                              L&#39;orea Sirman
                            </p>
                            <div className="stats">
                              <p className="text-xs text-secondary mb-0">
                                Redactor
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 position-relative mb-sm-0 mb-3">
                    <hr className="vertical dark d-md-block d-none" />
                    <div className="card card-plain">
                      <div className="card-header p-0 mx-lg-3 mt-3 position-relative z-index-1">
                        <Link href="#" className="d-block">
                          <img
                            src="/assets/img/examples/blog-9-1.jpg"
                            className="img-fluid border-radius-lg"
                          />
                        </Link>
                      </div>
                      <div className="card-body pt-3">
                        <h4 className="mb-3">
                          <Link
                            href="#"
                            className="text-darker font-weight-bolder"
                          >
                            8 Powerful Mental Models to Help You Win.
                          </Link>
                        </h4>
                        <p className="text-sm mb-0">By Andrew Peterson</p>
                      </div>
                    </div>
                    <div className="card card-plain">
                      <div className="card-header p-0 mx-lg-3 position-relative z-index-1">
                        <Link href="#" className="d-block">
                          <img
                            src="/assets/img/examples/blog-post-6.jpg"
                            className="img-fluid border-radius-lg"
                          />
                        </Link>
                      </div>
                      <div className="card-body pt-3">
                        <h4 className="mb-3">
                          <Link
                            href="#"
                            className="text-darker font-weight-bolder"
                          >
                            High performers are like surfers.
                          </Link>
                        </h4>
                        <p className="text-sm">By L&#39;orea Michael</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 position-relative mb-sm-0 mb-3">
                    <div className="card card-plain">
                      <div className="card-body pt-3">
                        <h6 className="font-weight-bolder d-flex align-items-center">
                          <i className="material-icons me-2">mic</i>Podcasts
                        </h6>
                        <p>An interview with Tesla founder.</p>
                        <span className="text-xs">By Alexa Rossa</span>
                      </div>
                    </div>
                    <hr className="horizontal dark mt-0 mb-2" />
                    <div className="card card-plain">
                      <div className="card-body pt-3">
                        <h6 className="font-weight-bolder d-flex align-items-center">
                          <i className="material-icons me-2">duo</i>
                          Interviews
                        </h6>
                        <p>
                          Make $500k through small biz or raise it from family.
                        </p>
                        <span className="text-xs">By Jonathan Silvia</span>
                      </div>
                    </div>
                    <hr className="horizontal dark mt-0 mb-2" />
                    <div className="card card-plain">
                      <div className="card-body pt-3">
                        <h6 className="font-weight-bolder d-flex align-items-center">
                          <i className="material-icons me-2">podcasts</i>
                          Podcasts
                        </h6>
                        <p>Lengthen your time horizon.</p>
                        <span className="text-xs">By Andrew Joe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

(Blog as PageWithLayoutType).layout = HomeLayout;

export default Blog;

export const getServerSideProps: GetServerSideProps<any> = async (ctx) => {
  // const category = ctx.params?.category ? ctx.params?.category : "/";
  const slug = ctx.params?.slug ? ctx.params?.slug : "/";

  const { data } = await blogService.findBlogByCat(slug);

  if (!data) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      blog: data.data,
    },
  };
};
