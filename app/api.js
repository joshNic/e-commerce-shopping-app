const url = 'https://mobilebackend.turing.com/products?page=1&limit=20&description_length=200';
export function getProducts() {
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => responseJson.rows)
  }