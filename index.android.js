/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Menu from './js/Menu'
import Game from './js/Game'
import Score from './js/Score'

export default class cs399Project4Game extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'Menu', passProps:{}}}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }

  renderScene(route, navigator){
    var componentToRender = null;
    switch (route.id){
      case 'Menu':
        componentToRender = <Menu navigator={navigator} route={route}/>;
        break;
      case 'Game':
        componentToRender = <Game navigator={navigator} route={route}/>;
        break;
      case 'Score':
        componentToRender = <Score navigator={navigator} route={route}/>;
        break;
      default:
        break;
    }

    return(
      <View>
        {componentToRender}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('cs399Project4Game', () => cs399Project4Game);
