import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';

const ProductCardList = props => {
  onPress = () => {
    props.navigate('ProductDetailScreen', {
      product_id: props.product_id,
      image: `https://mobilebackend.turing.com/images/products/${
        props.thumbnail
      }`,
      name: props.name,
      discount: props.discount,
      price: props.price,
      description: props.description
    });
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Card>
          <Text style={{ marginBottom: 10 }}>{props.name}</Text>
          <Image
            source={{
              uri: `https://mobilebackend.turing.com/images/products/${
                props.thumbnail
              }`
            }}
            style={{ width: 150, height: 150 }}
          />
          {/* <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              backgroundColor: 'orange'
            }}
            title='View Details'
          /> */}
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCardList;
