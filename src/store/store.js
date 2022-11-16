import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
// import { logger } from './middleware/logger';

//root-reducer



const persistConfig ={
    key: 'root',
    storage: storage,
    blaklist: ['user'],
}

const prtsistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
    );

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(prtsistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

// export const store = configureStore({rootReducer, composedEnhancers});