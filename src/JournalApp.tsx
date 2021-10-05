import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './themes/themes';
import { AppRouter } from './routers/AppRouter';

function JournalApp() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppRouter />
        </ThemeProvider>
    );
}

export default JournalApp;
