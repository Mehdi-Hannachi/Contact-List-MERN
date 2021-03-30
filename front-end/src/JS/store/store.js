// import { createStore, applyMiddleware, compose } from "redux";
// import reducerContact from "../reducers/reducerContact";
// import thunk from "redux-thunk";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducerContact,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;


import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducerContact from "../reducers/reducerContact";
const middleware = [thunk];
const store = createStore(
  reducerContact,
      compose(
            applyMiddleware(...middleware),
            window.navigator.userAgent.includes('Chrome') ?
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose,
      ),
);

export default store;
