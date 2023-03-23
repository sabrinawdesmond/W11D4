import { configureStore, createStore, combineReducers, applyMiddleware, compose } from 'redux'

const initialState = {item: {1: {"id": 1, "name": "Longos - Greek Salad", "liked": false}}}

const store = configureStore(initialState)

const rootReducer = combineReducers({
    // items: itemReducer
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



