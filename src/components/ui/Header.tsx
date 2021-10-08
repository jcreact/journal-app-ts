import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box, Stack } from '@mui/material';
import JournalIcon from '@mui/icons-material/ArticleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    return (
        <AppBar
            enableColorOnDark
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Stack direction="row" alignItems="center">
                        <JournalIcon />
                        <Typography variant="h6" ml={1} mr={2}>
                            Journal App
                        </Typography>
                    </Stack>

                    <Tooltip title="Cerrar sesión">
                        <IconButton>
                            <LogoutIcon color="secondary" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
