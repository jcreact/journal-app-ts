import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardHeader, FormControl, Grid, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { PasswordField } from './PasswordField';

export const LoginPage = () => {
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    };

    return (
        <Card sx={{ border: 1, borderColor: 'divider' }}>
            <CardHeader title="Inicio de Sesión" sx={{ textAlign: 'center' }} />
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <FormControl fullWidth>
                        <TextField
                            type="text"
                            name="email"
                            label="Correo"
                            placeholder="correo@mail.com"
                            autoComplete="off"
                            autoFocus
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField name="password" />
                    </FormControl>
                </CardContent>
                <Grid container sx={{ px: 2, mb: 2 }} spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            startIcon={<LoginIcon />}
                        >
                            Ingresar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            variant="contained"
                            color="success"
                            fullWidth
                            startIcon={<GoogleIcon />}
                        >
                            Google
                        </Button>
                    </Grid>

                    <Grid item xs={12} justifyContent="center">
                        <Button
                            component={Link}
                            color="inherit"
                            fullWidth
                            endIcon={<AppRegistrationIcon />}
                            to="/auth/register"
                        >
                            ¡Registrate!
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Card>
    );
};
