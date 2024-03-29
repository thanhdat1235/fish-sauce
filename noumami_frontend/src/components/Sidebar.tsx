import Head from "next/head";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ProfileModal from "./modal/profileModal";

const Sidebar: FC = () => {
  const getUserRedux = useSelector(
    (state: RootState) => state.userReducer.userActive
  );
  const getAuth = useSelector(
    (state: RootState) => state.userReducer.userIsLogin
  );
  const [showModal, setShowModal] = useState<Boolean>(false);
  const toggleModal = (toggle: Boolean): any => {
    setShowModal(toggle);
  };

  return (
    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
      <ProfileModal
        toggleModal={(toggle: Boolean) => toggleModal(toggle)}
        showModal={showModal}
      />
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex flex-row items-center justify-center h-12 w-full">
        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            ></path>
          </svg>
        </div>
        <div className="ml-2 font-bold text-2xl">QuickChat</div>
      </div>
      <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg relative">
        <div className="h-20 w-20 rounded-full border overflow-hidden">
          {getAuth.avatar ? (
            <img
              src={getAuth.avatar.avatar_link}
              alt="Avatar"
              className="h-full w-full"
            />
          ) : (
            <img
              src="https://pgddttramtau.edu.vn/wp-content/uploads/2022/12/1670933315_639_68-Hinh-Anh-Cho-Hai-Huoc-Bua-Lay-CUOI-RA.jpg"
              alt="Avatar"
              className="h-full w-full"
            />
          )}
        </div>
        <div className="text-sm font-semibold mt-2">{getAuth.username}</div>
        <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
        <div className="flex flex-row items-center mt-3">
          <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
            <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
          </div>
          <div className="leading-none ml-1 text-xs">Active</div>
        </div>
        <button
          data-modal-target="authentication-modal"
          data-modal-toggle="authentication-modal"
          onClick={() => setShowModal(!showModal)}
        >
          <i className="fa-solid fa-gear absolute top-2 right-3 cursor-pointer text-xl hover:text-blue-600"></i>
        </button>
      </div>
      <div className="flex flex-col mt-8">
        <div className="flex flex-row items-center justify-between text-xs">
          <span className="font-bold">Active Conversations</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            {getUserRedux.length}
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
          {getUserRedux.map((item, index) => (
            <button
              className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
              key={index}
            >
              <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                {item.username.slice(0, 1)}
              </div>
              <div className="ml-2 text-sm font-semibold">{item.username}</div>
            </button>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between text-xs mt-6">
          <span className="font-bold">Archivied</span>
          <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
            7
          </span>
        </div>
        <div className="flex flex-col space-y-1 mt-4 -mx-2">
          <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
              H
            </div>
            <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
