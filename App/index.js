import React,  {Component} from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'reduc-saga';
import {createStore, applyMiddleware} from 'redux';
import AllReducers from './reducers/index';
import Navigator from './Navigator/index';

const sagaMiddleware = createSagaMiddleware();
const store  = createStore(
					AllReducers,
					applyMiddleware(sagaMiddleware)
					);

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