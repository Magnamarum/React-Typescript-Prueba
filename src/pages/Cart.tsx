import * as React from "react";
import { connect } from "react-redux";

import ProductEntity from "../entities/ProductEntity";
import { addProductToCart, removeProductFromCart } from "../store/actions";

import AddToCartButton from "../components/AddToCartButton";
import RemoveFromCartButton from "../components/RemoveFromCartButton";
import Product from "../components/Product";

import { Container, Element } from "../components/CustomFlex";

export interface ProductProps {
  cartItems: ProductEntity[];
  removeProductFromCart: (productId: number) => void;
  addProductToCart: (product: ProductEntity) => void;
}
/** This page displays the products added to the Cart and  allows to add/remove products */
const CartPage: React.FC<ProductProps> = ({
  cartItems,
  removeProductFromCart,
  addProductToCart
}) => {
  return (
    <React.Fragment>
      <Container>
        {cartItems.length <= 0 && <p>No Items in the Cart!</p>}
        {cartItems.map(product => (
          <Element key={product.id}>
            <Product
              id={product.id}
              price={product.price}
              title={product.title}
              quantity={product.quantity}
            />
            <div>
              Quantity: {product.quantity}
              <AddToCartButton
                text="+"
                product={product}
                addProductToCart={addProductToCart.bind(null, product)}
              ></AddToCartButton>
              <RemoveFromCartButton
                text="-"
                productId={product.id}
                removeProductFromCart={removeProductFromCart.bind(
                  null,
                  product.id
                )}
              ></RemoveFromCartButton>
            </div>
          </Element>
        ))}
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (product: ProductEntity) =>
      dispatch(addProductToCart(product)),
    removeProductFromCart: (id: number) => dispatch(removeProductFromCart(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
