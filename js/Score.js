import React, { Component } from 'react';
import {
	Dimensions,
  Navigator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
var window = Dimensions.get('window');

class Score extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			score:(this.props.route.passProps.score!=null ? this.props.route.passProps.score : 0)
		}
	}

	render() {
		return(
			<View style={[styles.container, {height:window.height}]}>
				<Text style={styles.text}>
					Your Final Score was...
				</Text>
				<Text style={styles.text}>
					{this.state.score}
				</Text>
				<TouchableHighlight style={styles.returnButton} onPress={()=>{this.props.navigator.popToTop();}}>
					<Text style={styles.text}>Return to Menu</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgrey'
	},
	returnButton: {
		margin: 20,
		padding: 5,
		backgroundColor: 'darkgrey'
	},
	text: {
		fontSize: 24
	}
});

export default Score;