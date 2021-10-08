import { Typography, AppBar, Box, Button, Stack } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ImageIcon from '@mui/icons-material/Image';

export const NoteBar = () => {
    return (
        <AppBar enableColorOnDark position="static" color="inherit">
            <Box
                px={2}
                py={1}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <Typography variant="h6">8 de octubre 2021</Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Button color="info" startIcon={<ImageIcon />}>
                        Picture
                    </Button>
                    <Button color="success" startIcon={<SaveIcon />}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </AppBar>
    );
};
