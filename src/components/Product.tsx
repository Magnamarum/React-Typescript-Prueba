import React from "react";
import ProductEntity from "../entities/ProductEntity";

import styled from "styled-components";

const Title = styled.h2`
  color: #000;
  font-weight: 300;
`;

const Price = styled.div`
  color: #3a6601;
  font-weight: 300;
  margin: 6px 0;
`;
/** Product shell component */
const Product: React.FC<ProductEntity> = ({ title, price }) => {
  return (
    <div style={{ color: "#001" }}>
      <Title>{title}</Title>
      <Price>{price} €</Price>
    </div>
  );
};

export default Product;
