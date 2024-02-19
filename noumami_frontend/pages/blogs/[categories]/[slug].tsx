import { GetServerSideProps } from "next";
import React, { FC } from "react";
import productService from "../../../src/services/productService/productService";
import PageWithLayoutType from "../../../src/types/pageWithLayout";
import HomeLayout from "../../../src/layouts/home.layout";
import blogService from "../../../src/services/blogService/blogService";

interface MyComponentProps {
  blog: any;
}

const DetailBlog: FC<MyComponentProps> = ({ blog }) => {
  return <div>DetailBlog</div>;
};

(DetailBlog as PageWithLayoutType).layout = HomeLayout;

export default DetailBlog;

export const getServerSideProps: GetServerSideProps<any> = async (ctx) => {
  const categories = ctx.params?.categories ? ctx.params?.categories : "";
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
