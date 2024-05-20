import React from 'react';
import { Container, Box, TextField, Button, Typography, Checkbox, Link } from '@mui/material';

const Login = () => {
    return (
        <Container maxWidth="xs" className="formContainer">
            <Box component="form" noValidate autoComplete="off">
                <Typography variant="h4" component="h1" gutterBottom>Login Form</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Username"
                    variant="outlined"
                    
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required 
                    label="Password"
                    type="password"
                    variant="outlined"
                />
                <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
                    <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography>Remember Me</Typography>
                    </Box>
                    <Link href="#" underline="none">Forgot Password?</Link>
                </Box>
                <Button fullWidth variant="contained" 
                        color="primary" 
                        type="submit" 
                        sx={{ 
                            mt: 2, 
                            backgroundColor: '#eb3d94','&:hover': { backgroundColor: '#f04fc8',}, }}>Login</Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Don't have an account?
                    <Link href="/SignUp" underline="none"> Register</Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default Login;
