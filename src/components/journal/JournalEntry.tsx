import React from 'react';
import { Avatar, Box, Typography, Badge } from '@mui/material';

export const JournalEntry = () => {
    const show = Math.trunc(Math.random() * 10) % 2 === 0;

    return (
        <Box display="flex" alignItems="center" p={1} className="pointer">
            <Badge
                color="success"
                variant="dot"
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                badgeContent={''}
                invisible={show}
            >
                <Avatar
                    variant="rounded"
                    src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    sx={{ width: 64, height: 64 }}
                />
            </Badge>

            <Box sx={{ ml: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    Un nuevo día
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
            </Box>

            <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="button" sx={{ fontWeight: 'bold' }}>
                    Martes
                </Typography>
                <Typography variant="button" sx={{ fontWeight: 'bold' }}>
                    28
                </Typography>
            </Box>
        </Box>
    );
};
