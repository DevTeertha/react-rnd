/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";

interface IProductInfo {
  isLoading: boolean;
  error: string;
  products: any[];
}

const Products = () => {
  const productsInfo = useSelector((state: IProductInfo) => state);
  const { isLoading, error, products } = productsInfo;
  console.log("productsInfo: ", productsInfo);

  return (
    <div>
      <h1>Hello Products</h1>
    </div>
  );
};

export default Products;
