import { AppRouter } from './routers/AppRouter';
import ThemeApp from './theme/ThemeApp';

function JournalApp() {
    return (
        <ThemeApp>
            <AppRouter />
        </ThemeApp>
    );
}

export default JournalApp;
