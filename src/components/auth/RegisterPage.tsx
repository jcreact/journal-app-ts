import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, FormControl, TextField, Grid, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { PasswordField } from './PasswordField';

export const RegisterPage = () => {
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    return (
        <Card sx={{ border: 1, borderColor: 'divider' }}>
            <CardHeader title="Registro de Cuenta" sx={{ textAlign: 'center' }} />
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            name="name"
                            label="Nombre"
                            placeholder="Nombre Apellido"
                            autoComplete="none"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <TextField
                            type="text"
                            name="email"
                            label="Correo"
                            placeholder="correo@mail.com"
                            autoComplete="none"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField name="password" label="Contraseña" />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField name="password2" label="Confirmar Contraseña" />
                    </FormControl>
                </CardContent>
                <Grid container px={2} mb={2} spacing={2}>
                    <Grid item xs={12} sm={6} />
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            endIcon={<AppRegistrationIcon />}
                        >
                            Registrar
                        </Button>
                    </Grid>
                    <Grid item xs={12} justifyContent="center">
                        <Button
                            component={Link}
                            color="inherit"
                            fullWidth
                            startIcon={<LoginIcon />}
                            to="/auth/login"
                        >
                            ¡Inicia Sesión!
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    );
};
