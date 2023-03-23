import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import produceReducer from './produce';
import { populateProduce } from './produce';

// const initialState = {item: {1: {"id": 1, "name": "Longos - Greek Salad", "liked": false}}}

const rootReducer = combineReducers({
    produce: produceReducer,
    cart: {}
})


let enhancer;

if (process.env.NODE_ENV !== "production") {
    const logger = require("redux-logger").default;
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer)
}

export default configureStore;



