import { MouseEvent, useState } from 'react';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordFieldProps {
    name: string;
    label?: string;
    placeholder?: string;
}

export const PasswordField = ({ name, label, placeholder }: PasswordFieldProps) => {
    const [show, setShow] = useState(false);

    const handleMouseDownPassword = (ev: MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
    };

    const handleClickShowPassword = (_: MouseEvent<HTMLButtonElement>) => {
        setShow((show) => !show);
    };

    return (
        <TextField
            type={show ? 'text' : 'password'}
            name={name}
            label={label || 'Contraseña'}
            placeholder={placeholder || '*******'}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            color="info"
                        >
                            {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        ></TextField>
    );
};
