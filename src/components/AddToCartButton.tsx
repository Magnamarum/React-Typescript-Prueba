import React from "react";
import CustomButton from "./CustomButton";
import ProductEntity from "../entities/ProductEntity";

export interface AddToCartButtonProps {
  text: string;
  product: ProductEntity;
  addProductToCart: (product: ProductEntity) => void;
}

/** Custom button: Expects a product and a function which will dispatch this product in order to add it to the cart state  */
const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  text,
  product,
  addProductToCart
}) => {
  return (
    <CustomButton onClick={addProductToCart.bind(null, product)}>
      {text}
    </CustomButton>
  );
};

export default AddToCartButton;
