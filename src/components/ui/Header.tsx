import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import JournalIcon from '@mui/icons-material/ArticleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    return (
        <AppBar enableColorOnDark position="static">
            <Toolbar>
                <JournalIcon />
                <Typography variant="h6" ml={1} mr={2}>
                    Journal App
                </Typography>

                <Tooltip title="Cerrar sesión">
                    <IconButton>
                        <LogoutIcon color="secondary" />
                    </IconButton>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
};
