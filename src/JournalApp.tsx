import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import ThemeApp from './theme/ThemeApp';

import { store } from './store/store';

function JournalApp() {
    return (
        <Provider store={store}>
            <ThemeApp>
                <AppRouter />
            </ThemeApp>
        </Provider>
    );
}

export default JournalApp;
