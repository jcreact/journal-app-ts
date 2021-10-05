import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './themes/themes';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <h1>Journal App</h1>
        </ThemeProvider>
    );
}

export default App;
