/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  Navigator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native';

import About from './about';

export default class AwesomeProject extends Component {
  static defaultProps = {
    value: 0
  };

  state = {
    value: this.props.value
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.section}>
        <Text>{this.state.value}</Text>

        <Slider
          style={{alignSelf: 'stretch'}}
          onValueChange={(value) => {
            this.setState({value: value * 500});
            // styles.image.width = value * 500;
            // styles.image.height = value * 500;
          }}/>
        </View>
        <Image
          source={{uri: "https://facebook.github.io/react/img/logo_og.png"}}
          style={{width: this.state.value, height: this.state.value}}/>
        <View style={styles.section}>

          <Text>Else</Text>
        </View>

        <View style={styles.section}>
          <Text>Hladaf</Text>
        </View>

        <Image source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}} />
        <Text style={styles.welcome}>
          Hello World!
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </ScrollView>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 50,
    height: 50
  },
  section: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
