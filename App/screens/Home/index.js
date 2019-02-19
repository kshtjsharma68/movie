import React, {Component} from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
				<View>
					<ImageBackground source={require('../../Assets/Images/mountain.jpg')} style={styles.ImageBackground}>
					<Text>This is the home page text</Text>
					</ImageBackground>
				</View>
			);
		}
};

const styles = StyleSheet.create({
	ImageBackground: {
		height: '100%',
		width: '100%'
	}
});

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(Home);