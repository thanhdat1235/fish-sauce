import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#232323] py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 !gap-x-10">
          <div className="grid !gap-x-6 lg:grid-cols-2">
            <div className="!mb-10 lg:!mb-0 !px-4 lg:!px-0">
              <h4 className="text-3xl font-dance font-bold text-white !mb-5">
                About Us
              </h4>
              <Link href="#" className="flex !mb-5">
                <i className="fa-solid fa-location-arrow text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  Recibo, 99 Knightsbridge, London
                </p>
              </Link>
              <Link href="#" className="flex !mb-5">
                <i className="fa-solid fa-phone text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">+44-30-3544-7658</p>
              </Link>
              <Link href="#" className="flex !mb-5">
                <i className="fa-solid fa-mobile-screen text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">+44-30-3544-7658</p>
              </Link>
              <Link href="#" className="flex !mb-5">
                <i className="fa-regular fa-envelope text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  reservation@reciborestaurant.com
                </p>
              </Link>
              <Link href="#" className="flex !mb-5">
                <i className="fa-solid fa-link text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  http://reciborestaurantthemes.com
                </p>
              </Link>
            </div>
            <div className="!mb-10 lg:!mb-0 !px-4 lg:!px-0">
              <h4 className="text-3xl font-dance font-bold text-white !mb-5">
                Recent Posts
              </h4>
              <Link
                href="#"
                className="flex !mb-5 !pb-3 border-b !border-gray-500"
              >
                <i className="fa-solid fa-angle-right text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  Sem Porta Mollis Parturient
                </p>
              </Link>
              <Link
                href="#"
                className="flex !mb-5 !pb-3 border-b !border-gray-500"
              >
                <i className="fa-solid fa-angle-right text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  Nullam Lorem Mattis Purus
                </p>
              </Link>
              <Link
                href="#"
                className="flex !mb-5 !pb-3 border-b !border-gray-500"
              >
                <i className="fa-solid fa-angle-right text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  Nibh Sem Sit Ullamcorper
                </p>
              </Link>
              <Link
                href="#"
                className="flex !mb-5 !pb-3 border-b !border-gray-500"
              >
                <i className="fa-solid fa-angle-right text-white text-sm mr-3"></i>
                <p className="text-white text-sm font-sans">
                  Donec luctus imperdiet
                </p>
              </Link>
            </div>
          </div>
          <div className="!px-4 lg:!px-0">
            <h4 className="text-3xl font-dance font-bold text-white !mb-5">
              Award Winning
            </h4>
            <img
              className="h-[120px] !mb-5  "
              src="https://max-themes.net/demos/recibo/upload/awards.png"
              alt="img"
            />
            <p className="text-white text-sm font-normal font-sans">
              Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum
              id ligula porta felis euismod semper. Aenean lacinia bibendum
              nulla sed consectetur. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
