import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from 'native-base';
import CartIcon from '../components/CartIcon';
import { connect } from 'react-redux';
import { addItemToCart } from '../actions/action';

class ProductDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Product Details',
    headerRight: <CartIcon />
  };
  render() {
    //console.log(this.props);
    let productId = this.props.navigation.getParam('product_id', 'NO Product');
    let productPrice = this.props.navigation.getParam(
      'price',
      'NO Product Price'
    );
    let productDiscount = this.props.navigation.getParam(
      'discount',
      'NO Product Discount'
    );
    let productDescription = this.props.navigation.getParam(
      'description',
      'NO Product Description'
    );
    let productName = this.props.navigation.getParam('name', 'NO Product Name');
    let productImage = this.props.navigation.getParam(
      'image',
      'NO Product Image'
    );

    const products = {
      id: productId,
      name: productName,
      image: productImage,
      description: productDescription,
      discount: productDiscount,
      price: productPrice
    };

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{productName}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: `${productImage}` }}
                style={{ height: 200, width: 150 }}
              />
              <Left>
                <Text
                  style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    padding: 1
                  }}
                >
                  {productDescription}
                </Text>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text>Discount: {productDiscount}</Text>
              </Left>

              <Text>Price: {productPrice}</Text>

              <Right>
                <Button onPress={() => this.props.addItemToCart(products)}>
                  <Text>Add to cart</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
      // <View>
      //   <Text> {productId} </Text>
      // </View>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addItemToCart: product => dispatch(addItemToCart(product))
//   };
// };

const mapDispatchToProps = {
  addItemToCart: product => addItemToCart(product)
};
const mapStateToProps = ({ shop }) => {
  return {
    cartItems: shop.cartItems
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailScreen);
