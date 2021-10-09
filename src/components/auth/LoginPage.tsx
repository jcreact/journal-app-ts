import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, CardContent, CardHeader, FormControl, Grid, TextField } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { loginMailPassword, loginWithGoogle } from '../../actions/auth';

import { PasswordField } from './PasswordField';
import { useForm } from '../../hooks/useForm';

interface LoginForm {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const dispatch = useDispatch();

    const { values, handleInputChange } = useForm<LoginForm>({
        email: 'palmahn@gmail',
        password: 'JcPalmaGMail900$',
    });

    const { email, password } = values;

    const handleGoogleLogin = () => {
        dispatch(loginWithGoogle());
    };

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        dispatch(loginMailPassword(email, password));
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
                            value={email}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginTop: 2 }}>
                        <PasswordField
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
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
                            onClick={handleGoogleLogin}
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
