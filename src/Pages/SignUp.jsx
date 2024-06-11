import React from 'react';
import { Container, Box, TextField, Button, Typography, Checkbox, Link } from '@mui/material';

const SignUp = () => {
    return (
        <Container maxWidth="xs" className="formContainer">
            <Box component="form" noValidate autoComplete="off">
                <Typography variant="h4" component="h1" gutterBottom>Registration Form</Typography>
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
                    label="Email"
                    type="email"
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
                <Box display="flex" alignItems="center" marginTop={2}>
                    <Checkbox />
                    <Typography>I agree to the terms and conditions</Typography>
                </Box>
                <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2, backgroundColor: '#eb3d94','&:hover': { backgroundColor: '#f04fc8',}, }}>Register</Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Already have an account?
                    <Link href="/Login" underline="none"> Login</Link>
                </Typography>
            </Box>
        </Container>
    );
}

export default SignUp;
