/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * this is my very first step in react native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ThanhStore extends Component {
  render() {
    return (
      <View>
        <Text style={styles.thanhdt}>
          Thanh Dep Trai !
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thanhdt: {
    fontSize: 20,
    color: '#006789',
    textAlign: 'center',
    margin: 10,
  }
});

AppRegistry.registerComponent('ThanhStore', () => ThanhStore);
