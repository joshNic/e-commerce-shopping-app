import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';
import { getProducts } from '../api';
import ProductCardList from '../components/ProductCardList';
import Spinner from 'react-native-loading-spinner-overlay';

export default class HomeScreen extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    return fetch(
      'https://mobilebackend.turing.com/products?page=1&limit=20&description_length=200'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: true,
          products: Array.from(responseJson.rows)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state.products);
    const { navigate } = this.props.navigation;
    return (
      <View>
        {this.state.loading && (
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => (
              <ProductCardList
                navigate={navigate}
                name={item.name}
                thumbnail={item.thumbnail}
                product_id={item.product_id}
                description={item.description}
                discount={item.discounted_price}
                price={item.price}
              />
            )}
            keyExtractor={item => item.product_id}
            numColumns={2}
          />
        )}
        {!this.state.loading && (
          <View>
            <Spinner visible={true} textContent={'Loading...'} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
