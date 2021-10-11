import { CircularProgress, Box, Typography } from '@mui/material';
import React from 'react';

export const GlobalLoading = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress size="10rem" disableShrink />
            <Typography mt={2} variant="h5">
                ¡Verificando autenticación, espere por favor...!
            </Typography>
        </Box>
    );
};
