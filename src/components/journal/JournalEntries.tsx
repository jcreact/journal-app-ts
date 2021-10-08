import React from 'react';
import { JournalEntry } from './JournalEntry';

export const JournalEntries = () => {
    const entries = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {entries.map((e) => (
                <JournalEntry key={e} />
            ))}
        </>
    );
};
