import React, { Component } from 'react';
import {
	Dimensions,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} from 'react-native';
var window = Dimensions.get('window');

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={[styles.menu, {height:window.height}]}>
				<Text style={styles.title}>
					Box
				</Text>
				<View style={styles.startButton}>
					<TouchableHighlight onPress={()=>{this.props.navigator.push({id:'Game',passProps:{}})}}>
						<Text style={{fontSize:24}}>Start</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	menu: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor:'lightgrey'
	},
	startButton: {
		backgroundColor:'darkgrey',
		padding: 4
	},
	title: {
		fontSize: 34,
		textShadowColor: 'black',
		textShadowOffset: {width:2,height:2},
		textShadowRadius: 18
	}
});

export default Menu;