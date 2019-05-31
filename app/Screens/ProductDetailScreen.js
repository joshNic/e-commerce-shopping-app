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

export default class ProductDetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Product Details'
  };
  render() {
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
    return (
      <Container>
        <Content>
          {/* <Text> {productId} </Text>
          <Text> {productPrice} </Text>
          <Text> {productDiscount} </Text>
          <Text> {productName} </Text>
          <Text> {productImage} </Text>
          <Text> {productDescription} </Text> */}
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
                <Button transparent>
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
