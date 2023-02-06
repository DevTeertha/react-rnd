import React from "react";

interface IPRODUCTOBJ{
category: string
description: string
image: any
price: any
rating: any
title: string
}

interface IPROPS {
  key: any
  product: IPRODUCTOBJ
} 



const ProductCard = ({product}: any) => {
  const {title, price, image} = product
  return (
    <div className="card p-2 shadow-xl">
      <figure className="w-36 mx-auto">
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-red-500 font-semibold">${price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
