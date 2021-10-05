import { createTheme, responsiveFontSizes } from '@mui/material';
import { deepPurple, pink } from '@mui/material/colors';

export const darkTheme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: 'dark',
            primary: deepPurple,
            secondary: pink,
        },
        components: {
            MuiAppBar: {
                defaultProps: {
                    enableColorOnDark: true,
                },
            },
        },
    })
);
