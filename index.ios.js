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
      <View style = {styles.mainContainer}>
        <View style =  {styles.navbar}>
        <Text style = {styles.navbarButton}></Text>
        <Text style = {styles.navbarTitle} >ThanhStore</Text>
        <Text style = {styles.navbarButton}>Search</Text>
        </View>

        <View style = {styles.content}>
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex :1
  },
  content:{
    backgroundColor: "#ccc"
  },
  navbar: {
    backgroundColor: '#2a3744',
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection : 'row'
  },
  navbarTitle:{
    color: '#fefefe',
    textAlign : 'center',
    fontWeight :'bold',
    flex:1
  },
  navbarButton:{
    width: 50,
    color: '#fefefe',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('ThanhStore', () => ThanhStore);
