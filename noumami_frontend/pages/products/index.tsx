import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import productService from "../../src/services/productService/productService";
import PageWithLayoutType from "../../src/types/pageWithLayout";
import HomeLayout from "../../src/layouts/home.layout";

interface Iprops {
  products: any;
}

const Product: FC<Iprops> = ({ products }) => {
  return <></>;
};

(Product as PageWithLayoutType).layout = HomeLayout;

export default Product;

export const getStaticProps: GetStaticProps = async () => {
  // Lấy danh sách các sản phẩm từ API hoặc database
  const { data } = await productService.getAllProducts();
  return { props: { title: "My Title", products: data } };
};
