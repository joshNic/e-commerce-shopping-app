import initialState from '../store/initialState';
// const initialState = {
//   products: [],
//   product: {},
//   loading: true,
//   cartItems: []
// };

const shopReducer = (state = initialState.shop, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return { ...state, products: action.payload, loading: false };
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case 'REMOVE_FROM_CART':
      return state.filter(cartItem => cartItem.id !== action.payload.id);

    default:
      return state;
  }
};
export default shopReducer;
