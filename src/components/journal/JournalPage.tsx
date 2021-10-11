import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';

import { Header } from '../ui/Header';
import { Sidebar } from '../ui/Sidebar';

import { NothingSelected } from './NothingSelected';
import { Note } from '../notes/Note';

export const JournalPage = () => {
    const [drawerWidth] = useState(420);

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gridTemplateRows: 'auto 1fr',
                gridTemplateAreas: `'header header' 'sidebar main'`,
                // justifyItems: 'stretch',
                // alignItems: 'stretch',
            }}
        >
            <Box sx={{ gridArea: 'header' }}>
                <Header />
            </Box>
            <Box component="aside" sx={{ gridArea: 'sidebar', width: drawerWidth }}>
                <Toolbar />
                <Sidebar drawerWidth={drawerWidth} />
            </Box>
            <Box component="main" sx={{ gridArea: 'main' }}>
                <Toolbar />
                {false && <NothingSelected />}
                <Note />
            </Box>
        </Box>
    );
};
