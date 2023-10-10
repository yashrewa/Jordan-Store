import React from "react";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { useFetchFromNext } from "@/utils/api";

const Category = ({ category, products, slug }) => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {category?.data?.name}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.product?.map((item) => {
            return <ProductCard key={item._id} item={item}/>;
          })}
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
          {/* <ProductCard /> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;

export async function getStaticPaths() {
  const categories = await useFetchFromNext("categories");

  const paths = categories.data.map((c) => ({
    params: {
      slug: c.name
    }
  }));
  // console.log(paths)
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  // console.log(slug)
  const category = await useFetchFromNext(`categories/${slug}`);
  const products = category.data;
  console.log(products);
  return {
    props: {
      category,
      products,
      slug
    }
  };
}
