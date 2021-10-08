import { useState } from 'react';
import { Box } from '@mui/material';

import { Header } from '../ui/Header';
import { Sidebar } from '../ui/Sidebar';

import { NothingSelected } from './NothingSelected';

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
                <Sidebar drawerWidth={drawerWidth} />
            </Box>
            <Box component="main" sx={{ gridArea: 'main' }}>
                <NothingSelected />
            </Box>
        </Box>
    );
};
