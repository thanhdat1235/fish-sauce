import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import productService from "../../services/productService/productService";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import blogService from "../../services/blogService/blogService";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [prPaths, setPrPaths] = useState([]);
  const [bgPaths, setBgPaths] = useState([]);

  useEffect(() => {
    productPaths();
    blogPaths();
  }, []);

  const productPaths = async () => {
    const resPr = await productService.getAllProducts();
    setPrPaths(resPr.data);
    console.log(prPaths);
  };

  const blogPaths = async () => {
    const resBl = await blogService.getAllCat();
    setBgPaths(resBl.data);
  };

  return (
    <nav className=" w-full z-50 flex flex-wrap items-center justify-between px-2 py-3 mb-3 lg:bg-transparent fixed">
      <div className="flex container mx-auto flex-wrap items-center justify-between z-10 rounded-md bg-white  relative">
        <Link
          className="text-sm font-bold leading-relaxed inline-flex items-center mr-4 py-2 whitespace-nowrap uppercase text-blueGray-500"
          href="#/"
        >
          <img className="rounded-full mr-2 w-6 lg:w-[30px]" />
          <img src="/assets/img/noumami/Noumami Logo.png" alt="logo" />
        </Link>
        <button
          className="ml-auto cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-blueGray-400 rounded bg-transparent block outline-none focus:outline-none text-blueGray-300 lg:hidden"
          type="button"
          onClick={() => setMenuMobile(!menuMobile)}
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out hidden">
          <ul className="lg:items-center lg:ml-auto flex-wrap flex flex-col list-none pl-0 mb-0 lg:flex-row">
            <li className="relative">
              <Link
                className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold transition-all duration-150 ease-in-out hover:text-blueGray-800 text-[#233065]"
                href="/"
              >
                Home{" "}
              </Link>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-10 !h-12 bg-transparent w-full"></div>
              <Link
                className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold transition-all duration-150 ease-in-out hover:text-blueGray-800 text-[#233065]"
                href="#"
              >
                About Us
                <i className="ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform "></i>
              </Link>
              <div className="group-hover:block hidden z-50">
                <div className="!mt-2 origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in-out transform scale-95 opacity-100 absolute">
                  <Link
                    href="/abouts/our-story"
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                  >
                    Our story
                  </Link>
                  <Link
                    href="/abouts/name-and-logo"
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                  >
                    Name and logo
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-10 !h-12 bg-transparent w-full"></div>
              <Link
                className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold transition-all duration-150 ease-in-out hover:text-blueGray-800 text-[#233065]"
                href="#"
              >
                About Noumami
                <i className="ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform "></i>
              </Link>
              <div className="group-hover:block hidden z-50">
                <div className="!mt-2 origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in-out transform scale-95 opacity-100 absolute">
                  <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                    Rediscovering fish sauce
                  </span>
                  <Link
                    href="/abouts/noumami/rediscovering/fish-sauce-heritage"
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                  >
                    Fish sauce heritage
                  </Link>
                  <Link
                    href="/abouts/noumami/rediscovering/production-method"
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                  >
                    Noumami proudction methods
                  </Link>
                  <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                    Quality & Safety
                  </span>
                  <Link
                    href="/abouts/noumami/quality-safety"
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                  >
                    Quality & Safety
                  </Link>
                  <span className="uppercase font-bold text-xs px-3 pt-4 block w-full whitespace-nowrap bg-transparent text-blueGray-400">
                    Environment and sustainability
                  </span>
                  <Link
                    href="/abouts/noumami/environment-sustainability"
                    className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                  >
                    Environment and sustainability
                  </Link>
                </div>
              </div>
            </li>
            <li className="relative group">
              <div className="absolute -bottom-10 !h-12 bg-transparent w-full"></div>
              <Link
                className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold transition-all duration-150 ease-in-out hover:text-blueGray-800 text-[#233065]"
                href="#"
              >
                Products
                <i className="ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform "></i>
              </Link>
              {/* <div className="group-hover:block hidden z-50">
                <div className="!mt-2 origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in-out transform scale-95 opacity-100 absolute">
                  {prPaths.map((path, index) => (
                    <Link
                      href={`/products/${path.params.slug}`}
                      key={index}
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      {path.params.name}
                    </Link>
                  ))}
                </div>
              </div> */}
            </li>
            <li className="relative group">
              <div className="absolute -bottom-10 !h-12 bg-transparent w-full"></div>
              <Link
                className="hover:opacity-75 px-3 py-4 lg:py-2 flex items-center text-base uppercase font-bold transition-all duration-150 ease-in-out hover:text-blueGray-800 text-[#233065]"
                href="#"
              >
                Blog
                <i className="ml-1 fas fa-caret-down transition-all duration-200 ease-in-out transform "></i>
              </Link>
              {/* <div className="group-hover:block hidden z-50">
                <div className="!mt-2 origin-top-right bg-white text-base float-left p-2 border list-none text-left rounded-lg shadow-lg min-w-48 transition-all duration-100 ease-in-out transform scale-95 opacity-100 absolute">
                  {blogPaths?.map((blog, index) => (
                    <Link
                      href={`/blogs/${blog.params.slug}`}
                      key={index}
                      className="text-sm px-3 py-2 block w-full whitespace-nowrap bg-transparent hover:bg-blueGray-100 rounded transition-all duration-100"
                    >
                      {blog.params.name}
                    </Link>
                  ))}
                </div>
              </div> */}
            </li>
            <li>
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out text-blueGray-500"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
              >
                <i className="fab fa-facebook text-lg leading-lg opacity-75 hover:opacity-50 text-blueGray-500"></i>
                <span className="lg:hidden lg:ml-0 ml-2">
                  Share on Facebook
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out text-blueGray-500"
                href="https://twitter.com/CreativeTim"
                target="_blank"
              >
                <i className="fab fa-twitter text-lg leading-lg opacity-75 hover:opacity-50 text-blueGray-500"></i>
                <span className="lg:hidden lg:ml-0 ml-2">Tweet on Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75 transition-all duration-150 ease-in-out text-blueGray-500"
                href="https://github.com/creativetimofficial"
                target="_blank"
              >
                <i className="fab fa-github text-lg leading-lg opacity-75 hover:opacity-50 text-blueGray-500"></i>
                <span className="lg:hidden lg:ml-0 ml-2">Star on Github</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Menu mobile */}
        {menuMobile && (
          <div
            className={`absolute bg-white !p-5 !top-20 right-0 rounded-md !overflow-hidden !overflow-y-scroll scrollbar-hide max-h-96`}
          >
            <Link
              href="/"
              className="text-black text-base font-semibold !pb-2 border-b !border-gray-500"
            >
              Home
            </Link>
            <ul className="!mt-4 !pb-2 border-b !border-gray-500">
              <h3 className="text-black text-base font-bold !pb-2 border-b !border-gray-500 !mb-2">
                About
              </h3>
              <li className="flex flex-col">
                <Link className="text-black text-sm font-normal !mb-2" href="#">
                  Our story
                </Link>
                <Link className="text-black text-sm font-normal" href="#">
                  Name and logo
                </Link>
              </li>
            </ul>
            <ul className="!mt-4 !pb-2 border-b !border-gray-500 !mb-3">
              <h3 className="text-black text-base font-bold !pb-2 border-b !border-gray-500 !mb-2">
                About Noumami
              </h3>
              <h4 className="text-black text-base font-semibold !mb-3">
                Rediscovering fish sauce
              </h4>
              <li className="flex flex-col">
                <Link className="text-black text-sm font-normal !mb-2" href="#">
                  Fish sauce heritage
                </Link>
                <Link className="text-black text-sm font-normal !mb-2" href="#">
                  Noumami production method
                </Link>
              </li>
              <h4 className="text-black text-base font-semibold !mb-3">
                Quality & Safety
              </h4>
              <li className="flex flex-col">
                <Link className="text-black text-sm font-normal !mb-2" href="#">
                  Quality & Safety
                </Link>
              </li>
              <h4 className="text-black text-base font-semibold !mb-3">
                Environment and sustainability
              </h4>
              <li className="flex flex-col">
                <Link className="text-black text-sm font-normal !mb-2" href="#">
                  Environment and sustainability
                </Link>
              </li>
            </ul>
            <h3 className="text-black text-base font-bold !pb-2 border-b !border-gray-500 !mb-2">
              Products
            </h3>
            <li className="flex flex-col">
              <Link className="text-black text-sm font-normal !mb-2" href="#">
                Salmon
              </Link>
              <Link className="text-black text-sm font-normal !mb-2" href="#">
                Pelagic
              </Link>
            </li>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
