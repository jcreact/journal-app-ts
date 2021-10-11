import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Listado de reducer de la aplicación.
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
});

export type AppState = ReturnType<typeof reducers>;

// Creación del store global de la aplicación.
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
