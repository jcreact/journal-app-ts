import { createStore, combineReducers, StoreEnhancer } from 'redux';
import { authReducer } from '../reducers/authReducer';

// Typeguard para utilizar Redux DevTools con TS
type WindowWithDevTools = Window & {
    __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer<unknown, {}>;
};

const isReduxDevtoolsExtenstionExist = (
    arg: Window | WindowWithDevTools
): arg is WindowWithDevTools => {
    return '__REDUX_DEVTOOLS_EXTENSION__' in arg;
};

// Listado de reducer de la aplicación.
const reducers = combineReducers({
    auth: authReducer,
});

// Creación del store global de la aplicación.
export const store = createStore(
    reducers,
    isReduxDevtoolsExtenstionExist(window) ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
);
