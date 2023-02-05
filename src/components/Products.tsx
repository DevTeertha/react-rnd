/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../service/actions/productsAction";

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
    <div>
      <h1>Hello Products</h1>
      {isLoading && <h2>Is Loading ....</h2>}
      {error && <h2>error.message</h2>}
      <section>
        {products && products.map((product) => {
          return <article>
            <h2>{product.id}</h2>
            <h3>{product.title}</h3>
          </article>
        })}
      </section>
    </div>
  );
};

export default Products;
