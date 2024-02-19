import React, { FC } from "react";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import PageWithLayoutType from "../../src/types/pageWithLayout";
import HomeLayout from "../../src/layouts/home.layout";
import productService from "../../src/services/productService/productService";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../src/includes/header";
import HeaderGlobal from "../../src/includes/headerGlobal";

interface MyComponentProps {
  product: any;
}

const ProductDetail: FC<MyComponentProps> = ({ product }) => {
  return (
    <>
      {/* <HeaderGlobal /> */}
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                The Catcher in the Rye
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-md-7 pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6">
              <div className="info">
                <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4">
                  <i className="material-icons opacity-10">local_shipping</i>
                </div>
                <h5 className="mt-4">24h Delivery</h5>
                <p>
                  Divide details about your product or agency work into parts.
                  Write a few lines about each one. A paragraph describing a
                  feature will be enough.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info">
                <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4">
                  <i className="material-icons opacity-10">verified_user</i>
                </div>
                <h5 className="mt-4">Refundable Policy</h5>
                <p>
                  It really matters and then like it really doesn’t matter. What
                  matters is the people who are sparked by it. And the people
                  who are like offended by it.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="info">
                <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4">
                  <i className="material-icons opacity-10">favorite</i>
                </div>
                <h5 className="mt-4">Popular Item</h5>
                <p>
                  That’s what I’m here for. Don’t be afraid to be wrong because
                  you can’t learn anything from a compliment. Why would anyone
                  pick blue over pink?{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <h3 className="text-center">You may also be interested in:</h3>
          <div className="row mt-7">
            <div className="col-6 col-lg-3">
              <div className="card mb-5 mb-lg-0">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <Link href="" className="d-block blur-shadow-image">
                    <img
                      src="../assets/img/examples/card-product1.jpg"
                      alt="img-blur-shadow"
                      className="img-fluid border-radius-lg"
                    />
                  </Link>
                </div>
                <div className="card-body text-center">
                  <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                    Trending
                  </p>
                  <h5 className="font-weight-bold mt-3">
                    <Link href="">Dolce & Gabbana</Link>
                  </h5>
                  <p className="mb-0">
                    Dolce & Gabbana's 'Greta' tote has been crafted in Italy
                    from hard-wearing red textured-leather.
                  </p>
                </div>
                <div className="card-footer d-flex pt-0">
                  <p className="font-weight-normal my-auto">$1,549</p>
                  <i
                    className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Saved to Wishlist"
                  >
                    favorite
                  </i>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="card mb-5 mb-lg-0">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <Link href="" className="d-block blur-shadow-image">
                    <img
                      src="../assets/img/examples/card-product3.jpg"
                      alt="img-blur-shadow"
                      className="img-fluid border-radius-lg"
                    />
                  </Link>
                </div>
                <div className="card-body text-center">
                  <p className="mb-0 text-dark text-uppercase font-weight-normal text-sm">
                    Popular
                  </p>
                  <h5 className="font-weight-bold mt-3">
                    <Link href="">Balmain</Link>
                  </h5>
                  <p className="mb-0">
                    Balmain's mid-rise skinny jeans are cut with stretch to
                    ensure they retain skin fit but move comfortably.
                  </p>
                </div>
                <div className="card-footer d-flex pt-0">
                  <p className="font-weight-normal my-auto">$459</p>
                  <i
                    className="material-icons position-relative ms-auto text-dark text-lg me-1 my-auto"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Save to Wishlist"
                  >
                    favorite
                  </i>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="card">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <Link href="" className="d-block blur-shadow-image">
                    <img
                      src="../assets/img/examples/card-product4.jpg"
                      alt="img-blur-shadow"
                      className="img-fluid border-radius-lg"
                    />
                  </Link>
                </div>
                <div className="card-body text-center">
                  <p className="mb-0 text-dark text-uppercase font-weight-normal text-sm">
                    Popular
                  </p>
                  <h5 className="font-weight-bold mt-3">
                    <Link href="">Balenciaga</Link>
                  </h5>
                  <p className="mb-0">
                    Balenciaga's black textured-leather wallet is finished with
                    the label's iconic 'Giant' studs.
                  </p>
                </div>
                <div className="card-footer d-flex pt-0">
                  <p className="font-weight-normal my-auto">$890</p>
                  <i
                    className="material-icons position-relative ms-auto text-primary text-lg me-1 my-auto"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Saved to Wishlist"
                  >
                    favorite
                  </i>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="card">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <Link href="" className="d-block blur-shadow-image">
                    <img
                      src="../assets/img/examples/card-product2.jpg"
                      alt="img-blur-shadow"
                      className="img-fluid border-radius-lg"
                    />
                  </Link>
                </div>
                <div className="card-body text-center">
                  <p className="mb-0 text-primary text-uppercase font-weight-normal text-sm">
                    Trending
                  </p>
                  <h5 className="font-weight-bold mt-3">
                    <Link href="">Burberry</Link>
                  </h5>
                  <p className="mb-0">
                    Burberry's black textured-cottom bomber is finished with the
                    label's iconic 'Weareable' jacket.
                  </p>
                </div>
                <div className="card-footer d-flex pt-0">
                  <p className="font-weight-normal my-auto">$890</p>
                  <i
                    className="material-icons position-relative ms-auto text-dark text-lg me-1 my-auto"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Save to Wishlist"
                  >
                    favorite
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

(ProductDetail as PageWithLayoutType).layout = HomeLayout;

export default ProductDetail;

export const getServerSideProps: GetServerSideProps<any> = async (ctx) => {
  const slug = ctx.params?.slug ? ctx.params?.slug : "/";

  const { data } = await productService.findBySlug(slug);

  if (!data) {
    ctx.res.statusCode = 404;

    return {
      props: {},
    };
  }

  return {
    props: {
      product: data.data,
    },
  };
};
