import { GetServerSideProps } from "next";
import React from "react";
import blogService from "../../../src/services/blogService/blogService";

const Categories = () => {
  return <div>Categories</div>;
};

export default Categories;

export const getServerSideProps: GetServerSideProps<any> = async (ctx) => {
  // const category = ctx.params?.category ? ctx.params?.category : "/";
  const id = ctx.params?.categories ? ctx.params?.categories : "";

  const { data } = await blogService.findBlogByCat(id);

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
