import { fork } from 'redux-saga/effects';
import  { getMovies } from'./basic';

export default function* rootSaga() {
	yield () [
	fork(getMovies)
	];
}