import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../includes/header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../includes/footer";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { setPathProduct } from "../redux/productSlice";
import { setPathBlog } from "../redux/blogSlice";

interface HomeLayoutProps {
  children: ReactNode & {
    props?: {
      title?: string;
    };
  };
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <>
      <title>{children?.props?.title}</title>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
