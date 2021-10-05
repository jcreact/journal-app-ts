import { useMemo } from 'react';
import { createTheme, responsiveFontSizes, useMediaQuery, CssBaseline } from '@mui/material';
import { deepPurple, pink } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';

interface AppThemeProps {
    children: JSX.Element | JSX.Element[];
}

function AppTheme({ children }: AppThemeProps) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            responsiveFontSizes(
                createTheme({
                    palette: {
                        mode: prefersDarkMode ? 'dark' : 'light',
                        primary: deepPurple,
                        secondary: pink,
                    },
                })
            ),
        [prefersDarkMode]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default AppTheme;
