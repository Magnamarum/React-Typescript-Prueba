import React from "react";
import ProductsPage from "./pages/Products";
import CartPage from "./pages/Cart";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import MainNavigation from "./components/MainNavigation";

interface AppProps {
  cartItemCount: number;
}
const App: React.FC<AppProps> = ({ cartItemCount }) => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MainNavigation cartItemNumber={cartItemCount} />
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    cartItemCount: state.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)
  };
};
export default connect(mapStateToProps)(App);
