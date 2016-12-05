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

class Game extends Component {
	constructor(props){
		super(props);
		this.state = {
			score:0,
			stage:1,
			position:{top:0,left:0},
			size:56
		}
		this.state.position = this.getNewPosition();
		this.timer = setInterval(this.moveToScore.bind(this), 10000);
	}

	moveToScore(){
		if (this.state.score >= this.state.stage*10){
			this.setState({
				size:this.state.size*0.8,
				stage:this.state.stage+1
			});
		}
		else {
			clearInterval(this.timer);
			this.props.navigator.replace({id:'Score', passProps:{score:this.state.score}});
		}
	}

	onGoodTap(){
		this.setState({
			score:this.state.score+1,
			position:this.getNewPosition()
		});
	}

	getNewPosition(){
		return({
			top:Math.random()*(window.height-(this.state.size*2)),
			left:Math.random()*(window.width-(this.state.size*2exit))
		});
	}

	render() {
		return(
			<View>
				<Text style={styles.score}>Score: {this.state.score}</Text>
				<View>
					<TouchableHighlight style={[styles.box, {width:this.state.size,height:this.state.size}, this.state.position]} onPress={this.onGoodTap.bind(this)}>
						<Text></Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'red',
		position: 'absolute',
	},
	score: {
		fontSize: 24,
		textAlign: 'right',
		backgroundColor: 'lightgrey'
	}
});

export default Game;