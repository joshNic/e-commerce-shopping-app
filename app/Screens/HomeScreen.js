import React, { Component } from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';
import { getProducts } from '../api';
import ProductCardList from '../components/ProductCardList';
import Spinner from 'react-native-loading-spinner-overlay';
import { getAllProducts } from '../actions/action';
import { connect } from 'react-redux';

class HomeScreen extends Component {
  componentDidMount() {
    const { getAllProducts } = this.props;
    getAllProducts();
  }

  render() {
    const { products, loading, navigation } = this.props;
    return (
      <View>
        {!loading && (
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCardList
                navigate={navigation.navigate}
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
        {loading && (
          <View>
            <Spinner visible={true} textContent={'Loading...'} />
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shop.products,
  loading: state.shop.loading
});

export const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
