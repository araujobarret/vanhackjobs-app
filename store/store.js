import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { composeWithDevTools } from 'remote-redux-devtools';

// Default initialization of the store, applying thunk middleware
export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
  return store;
}
