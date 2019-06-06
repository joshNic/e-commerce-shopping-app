import React from 'react';
import { View, Text, Image } from 'react-native';

import { Card, Button, Icon } from 'react-native-elements';

const CartItem = () => {
  return (
    <View>
      <Card title='Product Name'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Image
            source={{
              uri: `https://mobilebackend.turing.com/images/products/gallic-cock-thumbnail.gif`
            }}
            style={{ height: 150, width: 100 }}
          />
          <Image
            source={{
              uri: `https://mobilebackend.turing.com/images/products/gallic-cock-thumbnail.gif`
            }}
            style={{ height: 150, width: 100 }}
          />
          <Image
            source={{
              uri: `https://mobilebackend.turing.com/images/products/gallic-cock-thumbnail.gif`
            }}
            style={{ height: 150, width: 100 }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }}
        >
          <Text style={{ marginBottom: 10 }}>Old Price</Text>
          <Text style={{ marginBottom: 10 }}>Buy Price</Text>
        </View>
        <Button
          backgroundColor='#03A9F4'
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title='Remove Product'
        />
      </Card>
    </View>
  );
};

export default CartItem;
