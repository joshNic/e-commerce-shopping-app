export const addItemToCart = product => ({
  type: 'ADD_TO_CART',
  payload: product
});

export const getAllProducts = () => dispatch =>
  fetch(
    'https://mobilebackend.turing.com/products?page=1&limit=20&description_length=200'
  )
    .then(response => response.json())
    .then(responseJson => {
      dispatch({
        type: 'GET_ALL',
        payload: responseJson.rows
      });
    })
    .catch(error => {
      console.log(error);
    });
