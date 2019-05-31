import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> WelcomeScreen </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});