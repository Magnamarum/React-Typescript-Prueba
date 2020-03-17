import React from "react";
import CustomButton from "./CustomButton";
export interface AddToCartButtonProps {
  text: string;
  productId: number;
  removeProductFromCart: (productId: number) => void;
}

/** Custom button: Expects a productId and a function which will dispatch this productId in order to remove it from the cart state  */
const RemoveFronCartButton: React.FC<AddToCartButtonProps> = ({
  text,
  productId,
  removeProductFromCart
}) => {
  return (
    <CustomButton onClick={removeProductFromCart.bind(null, productId)}>
      {text}
    </CustomButton>
  );
};

export default RemoveFronCartButton;
