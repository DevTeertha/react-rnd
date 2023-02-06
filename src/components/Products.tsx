/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../service/actions/productsAction";
import ProductCard from "../components/Cards/ProductCard"

interface IProductInfo {
  isLoading: boolean;
  error: string;
  products: any[];
}

const Products = () => {
  const productsInfo = useSelector((state: IProductInfo) => state);
  const { isLoading, error, products } = productsInfo;
  
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div className="max-w-6xl mx-auto my-20">
      {isLoading && <h2>Is Loading ....</h2>}
      {error && <h2>error.message</h2>}
      <h1 className="text-5xl font-bold text-center">Products </h1>
      <section className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {products && products.map ((product): any => (
          <ProductCard
          key={product.id}
          product={product}
          ></ProductCard>
        ))}
      </section>
    </div>
  );
};

export default Products;
