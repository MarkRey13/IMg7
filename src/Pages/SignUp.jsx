import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Checkbox, Link, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import supabase from '../Services/Supabase';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [position, setPosition] = useState('');
    const [customPosition, setCustomPosition] = useState('');
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!agreed) {
            alert('You must agree to the terms and conditions');
            return;
        }

        const finalPosition = position === 'other' ? customPosition : position;

        // Sign up the user in Supabase
        const { user, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            // Save additional user info in the database
            const { data, error: dbError } = await supabase
                .from('profiles')
                .insert([{ 
                    id: user.id, 
                    first_name: firstName, 
                    last_name: lastName, 
                    username, 
                    email,
                    position: finalPosition 
                }]);

            if (dbError) {
                alert(dbError.message);
            } else {
                alert('Registration successful!');
            }
        }
    };

    return (
        <Container maxWidth="xs" className="formContainer">
            <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h4" component="h1" gutterBottom>Registration Form</Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <FormControl fullWidth margin="normal">
                    <InputLabel>Position</InputLabel>
                    <Select
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        label="Position"
                    >
                        <MenuItem value="charge_nurse">Charge Nurse</MenuItem>
                        <MenuItem value="personnel_officer">Personnel Officer</MenuItem>
                        <MenuItem value="medical_director">Medical Director</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                    </Select>
                </FormControl>
                {position === 'other' && (
                    <TextField
                        fullWidth
                        margin="normal"
                        required
                        label="Custom Position"
                        variant="outlined"
                        value={customPosition}
                        onChange={(e) => setCustomPosition(e.target.value)}
                    />
                )}
                <Box display="flex" alignItems="center" marginTop={2}>
                    <Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
                    <Typography>I agree to the terms and conditions</Typography>
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                        mt: 2,
                        backgroundColor: '#b2dfdb', // Changed color here
                        '&:hover': { backgroundColor: '#26a69a' }, // Change hover color if needed
                    }}
                >
                    Register
                </Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Already have an account?
                    <Link href="/Login" underline="none"> Login</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default SignUp;
