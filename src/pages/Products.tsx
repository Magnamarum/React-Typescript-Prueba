import * as React from "react";

import { connect, useDispatch } from "react-redux";
import ProductEntity from "../entities/ProductEntity";
import { addProductToCart, setProductList } from "../store/actions";
import Product from "../components/Product";
import { Container, Flex, Element } from "../components/CustomFlex";
import AddToCartButton from "../components/AddToCartButton";

export interface ProductProps {
  products: ProductEntity[];
  cartItemCount: number;
  addProductToCart: (product: ProductEntity) => void;
}
/** This page loads show reviews from the endpoint http://api.tvmaze.com/search/shows?q=Star and transforms them into ProductEntity in other to populate the state  */
const ProductsPage: React.FC<ProductProps> = ({
  products,
  addProductToCart
}) => {
  const dispatch = useDispatch();
  const fetchProducts = () => {
    fetch("http://api.tvmaze.com/search/shows?q=Star")
      .then(response => {
        return response.json();
      })
      .then(results => {
        var productList = results.map(
          result =>
            new ProductEntity(
              result.show.id,
              result.show.name,
              Math.round((result.score + Number.EPSILON) * 100) / 100
            )
        );
        dispatch(setProductList(productList));
      });
  };

  React.useEffect(() => {
    fetchProducts();
  }, []); // request the products only once

  return (
    <React.Fragment>
      <Container>
        <Flex>
          {products.length == 0 && <p>No products to buy!</p>}
          {products.map(product => (
            <Element size="3" key={product.id}>
              <Product
                id={product.id}
                price={product.price}
                title={product.title}
                quantity={product.quantity}
              />
              <AddToCartButton
                text="Add to Cart"
                product={product}
                addProductToCart={addProductToCart.bind(null, product)}
                ></AddToCartButton>
            </Element>
          ))}
        </Flex>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (product: ProductEntity) =>
      dispatch(addProductToCart(product))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
