import React, { FC, useEffect, useRef, useState } from "react";
import HomeLayout from "../src/layouts/home.layout";
import PageWithLayoutType from "../src/types/pageWithLayout";
import { useDispatch } from "react-redux";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { UserConfig, useTranslation } from "next-i18next";
import Header from "../src/includes/header";
import Button from "../src/components/button/Button";
import Link from "next/link";
import Card from "../src/components/card/Card";
import Video from "../src/components/video/Video";
import { GetStaticPaths, GetStaticProps } from "next";
import productService from "../src/services/productService/productService";
import blogService from "../src/services/blogService/blogService";
import { setPathProduct } from "../src/redux/productSlice";
import { setPathBlog } from "../src/redux/blogSlice";

interface Iprops {
  productPaths: any;
  blogPaths: any;
}

const Home: FC<Iprops> = ({ productPaths, blogPaths }) => {
  const { t } = useTranslation("common");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setPathProduct(productPaths));

  //   dispatch(setPathBlog(blogPaths));
  // }, []);

  return (
    <>
      <Header />
      <div className="bg-white py-14 container lg:max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="mb-6 lg:!mb-0">
            <h1 className="text-6xl font-dance font-bold mb-3 text-center text-black">
              Little About Us
            </h1>
            <div className="text-center text-lg font-bold text-gray-500 uppercase mb-3 font-sans">
              The history of us
            </div>
            <span className="border-b-2 border-[#FFD44C] w-5 h-1 mx-auto mb-3 flex"></span>
            <p className="text-center mb-3">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
              posuere consectetur est at lobortis. Nulla vitae elit libero, a
              pharetra augue. Donec sed odio dui.Integer posuere erat a ante
              venenatis.
            </p>
            <Button
              dataCreateBtn={{
                bgColor: "white",
                borderColor: "#FFD44C",
                title: "Learn more",
              }}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
            <div className="rounded-full overflow-hidden !w-60 h-60 border !border-gray-400 mx-auto !mb-5 lg:!mb-0">
              <img
                className="rounded-full w-full h-full object-cover"
                src="\assets\img\noumami\recipes\recips1.JPEG"
                alt="recipes"
              />
            </div>
            <div className="rounded-full overflow-hidden !w-60 h-60 border !border-gray-400 mx-auto">
              <img
                className="rounded-full w-full h-full object-cover"
                src="\assets\img\noumami\recipes\recips2.JPEG"
                alt="recipes"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative pt-20 pb-3 bg-cover"
        style={{
          backgroundImage: "url(/assets/img/noumami/recipes/recips3.JPEG)",
        }}
      >
        <div className="h-full w-full bg-black opacity-80 absolute !top-0 left-0 z-10"></div>
        <div className="max-w-7xl w-full mx-auto relative z-20 !px-4 lg:!px-0">
          <div className="grid grid-cols-3 gap-x-6 mb-8">
            <div className="flex justify-end items-center">
              <span className="!w-10 lg:!w-20 h-2 !border-t-2 !border-b-2 !border-[#FFD44C] flex"></span>
            </div>
            <div className="flex justify-center">
              <span className="text-white font-dance text-center text-2xl lg:text-4xl font-semibold">
                Dishes Recommended
              </span>
            </div>
            <div className="flex justify-start items-center">
              <span className="!w-10 lg:!w-20 h-2 !border-t-2 !border-b-2 !border-[#FFD44C] flex"></span>
            </div>
          </div>
          <div className="row w-full mx-auto">
            <div className="mx-auto">
              <div
                id="carouselExampleIndicators"
                className="carousel slide mb-3"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner border-radius-sm">
                  <div className="carousel-item active">
                    <div className="grid lg:grid-cols-3 gap-x-8">
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="grid grid-cols-3 gap-x-8">
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="grid grid-cols-3 gap-x-8">
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                      <Card
                        dataCard={{
                          link: "#",
                          image:
                            "https://max-themes.net/demos/recibo/upload/shutterstock_180241331-400x300.jpg",
                          title: "RAINBOW MACAROON",
                          desc: "Raspberries, Blueberry, Waffle, Vanilla",
                          textColor: "white",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev !left-[47%] !top-[18%] bottom-[unset] !w-[unset]"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-chevron-left text-[#FFD44C] text-2xl"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next !right-[47%] !top-[18%] bottom-[unset] !w-[unset]"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-chevron-right text-[#FFD44C] text-2xl"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="bg-white py-14 container lg:max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="grid lg:grid-cols-2 gap-x-10 mb-6 lg:!mb-0">
            <div className="rounded-md overflow-hidden border !border-gray-400 mx-auto !mb-10 lg:!mb-0">
              <img
                className="rounded-md w-full h-full object-cover"
                src="\assets\img\noumami\company1.JPEG"
                alt="recipes"
              />
            </div>
            <div className="rounded-md overflow-hidden border !border-gray-400 mx-auto">
              <img
                className="rounded-md w-full h-full object-cover"
                src="\assets\img\noumami\recipes\ingredient1.JPG"
                alt="recipes"
              />
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-dance font-bold mb-3 text-center text-black">
              Perfect Ingredients
            </h1>
            <div className="text-center text-lg font-bold text-gray-500 uppercase mb-3 font-sans">
              THIS IS OUR SECRET
            </div>
            <span className="border-b-2 border-[#FFD44C] w-5 h-1 mx-auto mb-3 flex"></span>
            <p className="text-center mb-3">
              Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed
              posuere consectetur est at lobortis. Nulla vitae elit libero, a
              pharetra augue. Donec sed odio dui.Integer posuere erat a ante
              venenatis.
            </p>
            <Button
              dataCreateBtn={{
                bgColor: "white",
                borderColor: "#FFD44C",
                title: "Learn more",
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#ffd44c] mb-6">
        <div className="flex py-5 max-w-3xl mx-auto justify-center items-center">
          <i className="fa-solid fa-bullhorn text-6xl text-black mr-10"></i>
          <div>
            <h3 className="text-black text-4xl font-dance font-bold mb-2">
              Special Promotion For This Month!
            </h3>
            <p className="text-base font-sans text-black">
              Come with more than 8 people get 20% off. Bring all your friends
              here!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white container lg:max-w-6xl mx-auto mb-5">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-3">
          <div className="col-span-1 !mb-10 lg:!mb-0">
            <h3 className="text-4xl font-dance font-bold text-black mb-4">
              Recent Articles
            </h3>
            <p className="text-sm font-sans leading-5 mb-3">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur. Donec id elit non mi .
            </p>
            <Link
              href="#"
              className="uppercase font-semibold text-sm text-black"
            >
              READ ALL NEWS
            </Link>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-7">
              <Card
                dataCard={{
                  image:
                    "https://max-themes.net/demos/recibo/upload/photodune-6672566-pizza-m-400x300.jpg",
                  title: "DONEC LUCTUS IMPERDIET",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere...",
                  link: "#",
                  readMore: {
                    title: "read more",
                    link: "#",
                  },
                  textColor: "black",
                  date: "23-10-2000",
                  author: "Phuc Du",
                }}
              />
              <Card
                dataCard={{
                  image:
                    "https://max-themes.net/demos/recibo/upload/photodune-6672566-pizza-m-400x300.jpg",
                  title: "DONEC LUCTUS IMPERDIET",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere...",
                  link: "#",
                  readMore: {
                    title: "read more",
                    link: "#",
                  },
                  textColor: "black",
                  date: "23-10-2000",
                  author: "Phuc Du",
                }}
              />
              <Card
                dataCard={{
                  image:
                    "https://max-themes.net/demos/recibo/upload/photodune-6672566-pizza-m-400x300.jpg",
                  title: "DONEC LUCTUS IMPERDIET",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere...",
                  link: "#",
                  readMore: {
                    title: "read more",
                    link: "#",
                  },
                  textColor: "black",
                  date: "23-10-2000",
                  author: "Phuc Du",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-[28vh] lg:h-[70vh]">
        <Video src="https://www.youtube.com/watch?v=w-HNyQPfOBU" />
      </div>
      <div className="bg-white !py-14 relative">
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="flex justify-center !mb-10">
            <div className="flex justify-end items-center !mr-6">
              <span className="!w-20 h-2 !border-t-2 !border-b-2 !border-black flex"></span>
            </div>
            <div className="flex justify-center">
              <span className="text-black font-dance text-5xl font-semibold">
                Gallery
              </span>
            </div>
            <div className="flex justify-start items-center !ml-6">
              <span className="!w-20 h-2 !border-t-2 !border-b-2 !border-black flex"></span>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 !gap-x-5">
            <div className="lg:col-span-2 !mb-10 lg:mb-0 !px-4 lg:px-0">
              <img
                className="w-full h-full object-cover"
                src="https://max-themes.net/demos/recibo/upload/photodune-7791145-cheese-variety-m-400x400.jpg"
                alt="img"
              />
            </div>
            <div className="lg:col-span-3 grid grid-cols-3 !gap-5 !px-4 lg:px-0">
              <img
                src="https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg"
                alt="img"
              />
              <img
                src="https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg"
                alt="img"
              />
              <img
                src="https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg"
                alt="img"
              />
              <img
                src="https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg"
                alt="img"
              />
              <img
                src="https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg"
                alt="img"
              />
              <img
                src="https://max-themes.net/demos/recibo/upload/shutterstock_288860159-400x400.jpg"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full !py-20"
        style={{
          backgroundImage:
            "url(https://max-themes.net/demos/recibo/upload/bg-section-2.jpg)",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl w-full mx-auto relative z-20">
          <div className="!mb-20">
            <div className="flex justify-center">
              <span className="text-[#ffd44c] font-dance text-5xl font-semibold">
                Testimonial
              </span>
            </div>
          </div>
          <div className="row w-full mx-auto">
            <div className="mx-auto">
              <div
                id="carouselTestimonial"
                className="carousel slide mb-3"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >
                <div className="carousel-inner border-radius-sm">
                  <div className="carousel-item active">
                    <p className="max-w-[700px] text-2xl text-center mx-auto text-white font-mono font-semibold !mb-3">
                      Etiam porta sem malesuada magna mollis euismod. Vivamus
                      sagittis lacus vel augue laoreet rutrum faucibus dolor
                      auctor. Cras mattis consectetur purus sit amet fermentum.
                      Curabitur blandit tempus.
                    </p>
                    <p className="text-center text-white text-base font-sans">
                      -John Doe,
                      <strong className="text-[#ffd44c]">Travelle</strong>
                    </p>
                  </div>
                  <div className="carousel-item">
                    <p className="max-w-[700px] text-2xl text-center mx-auto text-white font-mono font-semibold !mb-3">
                      Etiam porta sem malesuada magna mollis euismod. Vivamus
                      sagittis lacus vel augue laoreet rutrum faucibus dolor
                      auctor. Cras mattis consectetur purus sit amet fermentum.
                      Curabitur blandit tempus.
                    </p>
                    <p className="text-center text-white text-base font-sans">
                      - John Doe,
                      <strong className="text-[#ffd44c]">Travelle</strong>
                    </p>
                  </div>
                  <div className="carousel-item">
                    <p className="max-w-[700px] text-2xl text-center mx-auto text-white font-mono font-semibold !mb-3">
                      Etiam porta sem malesuada magna mollis euismod. Vivamus
                      sagittis lacus vel augue laoreet rutrum faucibus dolor
                      auctor. Cras mattis consectetur purus sit amet fermentum.
                      Curabitur blandit tempus.
                    </p>
                    <p className="text-center text-white text-base font-sans">
                      - John Doe,
                      <strong className="text-[#ffd44c]">Travelle</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev !left-[38%] lg:!left-[44%] !top-[16%] lg:!top-[25%] bottom-[unset] !w-[unset]"
            type="button"
            data-bs-target="#carouselTestimonial"
            data-bs-slide="prev"
          >
            <i className="fa-solid fa-chevron-left text-white text-2xl"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <img
            className="lg:!left-[48%] !left-[45%] !top-[16%] lg:!top-[25%] absolute"
            src="/assets/img/noumami/testimonial-quote.png"
            alt="img"
          />
          <button
            className="carousel-control-next !right-[40%] lg:!right-[45%] !top-[16%] lg:!top-[25%] bottom-[unset] !w-[unset]"
            type="button"
            data-bs-target="#carouselTestimonial"
            data-bs-slide="next"
          >
            <i className="fa-solid fa-chevron-right text-white text-2xl"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

(Home as PageWithLayoutType).layout = HomeLayout;

export default Home;

type Props = {
  productPaths: any;
  blogPaths: any;
  _nextI18Next?: {
    initialI18nStore: any;
    initialLocale: string;
    ns: string[];
    userConfig: UserConfig | null;
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const dataProduct = await productService.getAllProducts();

  const dataCategorires = await blogService.getAllCat();

  const productPaths = dataProduct.data.data.map((product: any) => ({
    params: { slug: product.attributes.slug, name: product.attributes.name },
  }));

  const blogPaths = dataCategorires.data.data.map((blog: any) => ({
    params: { slug: blog.attributes.slug, name: blog.attributes.title },
  }));

  if (!locale) {
    return {
      props: {
        productPaths,
        blogPaths,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      productPaths,
      blogPaths,
    },
  };
};
