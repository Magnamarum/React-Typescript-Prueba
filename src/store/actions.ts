import ProductEntity from "../entities/ProductEntity";

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';

export const addProductToCart = (product: ProductEntity) => {
  return dispatch => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
  };
};

export const removeProductFromCart = (productId:number) => {
    return dispatch => {
        dispatch({
          type: REMOVE_PRODUCT_FROM_CART,
          payload: productId
        });
    };
};

export const setProductList = (productList:ProductEntity[]) => {
  return dispatch => {
    dispatch({
      type: SET_PRODUCT_LIST,
      payload: productList
    })
  };
}