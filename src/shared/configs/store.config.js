import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import rootReducer from '../reducers/root.reducer';
import rootSaga from '../sagas/root.saga'
import { createLogger } from 'redux-logger';

const history = createBrowserHistory();
const saga = createSagaMiddleware();
const router = routerMiddleware(history);

const configureAppStore = () => {
    const logger = createLogger({
        collapsed: true,
    });
    const middlewareEnhancer = applyMiddleware(saga, logger, router)
    const composedEnhancers = composeWithDevTools(middlewareEnhancer)
    const store = configureStore({
        reducer: rootReducer,
        middleware: [
            ...getDefaultMiddleware()
        ],
        enhancers: [composedEnhancers]
    })
    saga.run(rootSaga);
    return store
}

export default configureAppStore;
