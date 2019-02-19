import React,  {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import AllReducers from './reducers/index';
import Navigator from './Navigator/index';


const store  = createStore(AllReducers);

export default class AppIndex extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
				<Provider store={store}>
					<Navigator/>
				</Provider>
			);
	}
}