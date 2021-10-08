import { Skeleton, Stack, Box } from '@mui/material';

export const NothingSelected = () => {
    return (
        <Box
            component="section"
            sx={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Stack spacing={1} sx={{ width: '60%' }}>
                <Skeleton animation="wave" variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton animation="wave" variant="rectangular" height={118} />
                <Skeleton animation="wave" variant="text" />
            </Stack>
        </Box>
    );
};
