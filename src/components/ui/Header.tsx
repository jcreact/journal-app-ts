import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Box, Stack } from '@mui/material';
import JournalIcon from '@mui/icons-material/ArticleOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { logout } from '../../actions/auth';
import { AppState } from '../../store/store';

export const Header = () => {
    const dispatch = useDispatch();
    const { name: displayName } = useSelector((state: AppState) => state.auth);

    const handleLogOut = () => {
        dispatch(logout());
    };

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
                    <Stack direction="row" alignItems="center">
                        <AccountCircleIcon />
                        <Typography ml={1} mr={3} sx={{ textAlign: 'center' }}>
                            {displayName}
                        </Typography>

                        <Tooltip title="Cerrar sesión">
                            <IconButton onClick={handleLogOut}>
                                <LogoutIcon color="secondary" />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
