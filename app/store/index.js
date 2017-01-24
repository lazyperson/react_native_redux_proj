
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/index';



const logger = store => next => action => {
	let result = next(action);
	console.log('>>>> next state', store.getState());
	return result;
}
let middlewares = [
	logger,
	thunkMiddleware
];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
export default function configureStore(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState);
}