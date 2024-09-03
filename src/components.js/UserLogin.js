import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

function Userlogin() {
    const[email, setEmail] = React.useState('')
    const[password, setPassword] = React.useState('')
    let x
    
// Verify login credentials
    const LoginCheck=(event)=>{

        event.preventDefault()
        const User={email,password}
        console.log(User)
        fetch("http://localhost:8080/loginuser/check",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(User)
    }).then(()=>{
      
      window.location.href = '/ReturnUser'
    })

   

    
        
        console.log(x)

    
    };

  

  return (
    <div>
      <h1 align="center">Aqua Life</h1><br></br>
    <ThemeProvider theme={defaultTheme}>
      <Container component="form" maxWidth="xs"
      
      
      noValidate
      autoComplete="off">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="pass"
              autoComplete="current-password"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={LoginCheck}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/StaffLogin" variant="body2">
                  forgot you password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/PatientRegistration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default Userlogin; 