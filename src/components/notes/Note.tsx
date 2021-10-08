import { Box, FormControl, TextField, Stack, Card, CardMedia } from '@mui/material';
import { NoteBar } from './NoteBar';

export const Note = () => {
    return (
        <Box component="section">
            <NoteBar />
            <Stack mt={4} mx={2} spacing={2} alignItems="flex-start">
                <FormControl fullWidth>
                    <TextField type="text" label="Título" placeholder="Some awesome title" />
                </FormControl>
                <FormControl fullWidth>
                    <TextField
                        type="text"
                        label="Descripción"
                        placeholder="Describe cómo fue o será tu experiencia..."
                        multiline
                        minRows={4}
                    />
                </FormControl>
                <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    />
                </Card>
            </Stack>
        </Box>
    );
};
