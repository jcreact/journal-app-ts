import React from 'react';
import { JournalEntry } from './JournalEntry';
import { Divider, Stack } from '@mui/material';

export const JournalEntries = () => {
    const entries = [1, 2, 3, 4, 5, 6];

    return (
        <Stack spacing={1} divider={<Divider flexItem />}>
            {entries.map((e) => (
                <JournalEntry key={e} />
            ))}
        </Stack>
    );
};
