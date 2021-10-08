import { Drawer, Button } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { JournalEntries } from '../journal/JournalEntries';
import { Stack } from '@mui/material';

interface SidebarProps {
    drawerWidth: number;
}

export const Sidebar = ({ drawerWidth }: SidebarProps) => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                gridArea: 'sidebar',
                width: drawerWidth,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, top: 'auto' },
            }}
        >
            <Stack>
                <Button
                    color="inherit"
                    size="large"
                    fullWidth
                    startIcon={<EventNoteIcon />}
                    sx={{ height: '52px' }}
                >
                    Agregar Evento
                </Button>
                <JournalEntries />
            </Stack>
        </Drawer>
    );
};
