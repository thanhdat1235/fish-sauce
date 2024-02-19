import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <section className="min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 my-auto">
            <h1 className="display-1 font-weight-bold">Error 404</h1>
            <h2>Erm. Page not found</h2>
            <p className="lead">
              We suggest you to go to the homepage while we solve this issue.
            </p>
            <button type="button">
              <Link
                className="btn bg-gradient-to-r from-yellow-500 to-[#e74c3c] mt-4 text-white"
                href="/"
              >
                Go to Homepage
              </Link>
            </button>
          </div>
          <div className="col-lg-6 my-auto position-relative">
            <img
              className="w-100 position-relative"
              src="../assets/img/illustrations/error-404.png"
              alt="404-error"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
