import { compose, createStore, applyMiddleware, configureStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//root-reducer
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore(rootReducer, undefined, composedEnhancers);