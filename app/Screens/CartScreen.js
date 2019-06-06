import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import CartItem from '../components/CartItem';
import { PricingCard } from 'react-native-elements';

class CartScreen extends Component {
  render() {
    console.log(this.props.cartItems);
    return (
      <View>
        {this.props.cartItems.length > 0 ? (
          <CartItem />
        ) : (
          <Text>No Items in cart</Text>
        )}
      </View>
    );
  }
}

const mapStateToProps = ({ shop }) => {
  return {
    cartItems: shop.cartItems
  };
};

export default connect(mapStateToProps)(CartScreen);
