import { combineReducers, createStore, applyMiddleware } from 'redux';
import controlsReducer from './controls/reducer';
import conversionsReducer from './conversions/reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  controls: controlsReducer,
  conversions: conversionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer, applyMiddleware(thunk, logger));
