import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
const CartIcon = props => {
  //console.log(props);
  // console.log('++Length+++' + props.cartItems.products.cartItems.length);
  return (
    <View style={{ padding: 5 }}>
      <View
        style={{
          position: 'absolute',
          height: 30,
          width: 30,
          borderRadius: 15,
          backgroundColor: 'rgba(95,197,123,0.8)',
          right: 15,
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {props.cartItems.length}
        </Text>
      </View>
      <Ionicons
        name='ios-cart'
        size={30}
        onPress={() => props.navigation.navigate('CartScreen')}
      />
    </View>
  );
};
const mapStateToProps = ({ shop }) => ({
  cartItems: shop.cartItems
});

export default connect(mapStateToProps)(withNavigation(CartIcon));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
