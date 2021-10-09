import { MouseEvent, useState } from 'react';
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const PasswordField = (props: TextFieldProps) => {
    const [show, setShow] = useState(false);

    const handleMouseDownPassword = (ev: MouseEvent<HTMLButtonElement>) => {
        console.log('mousedown');
        ev.preventDefault();
    };

    const handleClickShowPassword = () => {
        setShow((show) => !show);
    };

    return (
        <TextField
            type={show ? 'text' : 'password'}
            label={props.label || 'Contraseña'}
            placeholder={props.placeholder || '*******'}
            {...props}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            color={props.error ? 'error' : 'info'}
                            edge="end"
                        >
                            {show ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        ></TextField>
    );
};
