import { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Checkbox } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import supabase from '../Services/Supabase';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false); 
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("something went wrong");
  
    const login = async () => {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      });
    
      if (error) {
        setIsError(true);
        setErrorMessage(error.message);
      } else if (data) {
        if (data.user) {
          navigate("/dashboard");
        } else {
          setIsError(true);
          setErrorMessage("Invalid email or password");
        }
      }
    };

    return (
        <Container maxWidth="xs" className="formContainer">
            <Box component="form" noValidate autoComplete="off" >
                <Typography variant="h4" component="h1" gutterBottom>Login Form</Typography>
                {
                    isError && 
                    <Box>
                        <Typography color="error" align="center">{errorMessage}</Typography>
                    </Box>
                }
                <TextField
                    fullWidth
                    margin="normal"
                    required
                    label="Email"
                    variant="outlined"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    required 
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
                    <Box display="flex" alignItems="center">
                        <Checkbox />
                        <Typography>Remember Me</Typography>
                    </Box>
                    <Link href="#" underline="none">Forgot Password?</Link>
                </Box>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick = {login}
                
                    
                    sx={{
                        mb: 2,
                        backgroundColor: '#eb3d94',
                        '&:hover': { backgroundColor: '#f04fc8' },
                    }}
                >
                    Login
                </Button>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Don't have an account?{' '}
                    <Link to="/SignUp" underline="none">Register</Link>
                </Typography>
            </Box>
        </Container>
    );
}
