import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux';

class Home extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return(
				<View>
					<Text>This is the home page text</Text>
				</View>
			);
		}
};

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps)(Home);