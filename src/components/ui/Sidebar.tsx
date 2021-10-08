import { Drawer, List, ListItem, ListItemText, Box, ListItemIcon, Divider } from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { JournalEntries } from '../journal/JournalEntries';

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
            <Box>
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <EventNoteIcon />
                        </ListItemIcon>
                        <ListItemText primary="Agregar Evento" />
                    </ListItem>
                    <Divider sx={{ my: 1 }} />
                    <JournalEntries />
                </List>
            </Box>
        </Drawer>
    );
};
