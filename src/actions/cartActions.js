import axios from 'axios';
import { CART_ADD_ITEM ,CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS, CART_SAVE_PAYMENT_METHOD,} from '../constants/cartConstants';


export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

/* ACTION CREATOR USED IN ShippingScreen COMPONENT */
export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_SHIPPING_ADDRESS,
      payload: data,
    });
  
    // SETTING VALUE OF ADDRESS IN LOCAL STORAGE
    localStorage.setItem("shippingAddress", JSON.stringify(data));
  };


  /* ACTION CREATOR USED IN PaymentScreen COMPONENT */
export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
      type: CART_SAVE_PAYMENT_METHOD,
      payload: data,
    });
  
    // SETTING VALUE OF PAYMENT METHOD IN LOCAL STORAGE
    localStorage.setItem("paymentMethod", JSON.stringify(data));
  };