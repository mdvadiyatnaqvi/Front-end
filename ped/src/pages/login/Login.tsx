import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import loginstyles from "./login.styles";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const classes = loginstyles;
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/");
  }

  function handleForgotPassword() {
    navigate("/forgot-password");
  }

  return (
    <Grid container sx={classes.containerFirst}>
      {/* Left Side: Background Image */}
      <Grid item xs={12} sm={12} md={12} lg={7} sx={classes.mainContainer}>
        <img
          src="public/images/login-bg.jpg"
          alt="bg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>

      {/* Right Side: Form */}
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={5}
        sx={classes.formClass}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <img
          src="public/images/cpwd-logo.png"
          alt="Logo"
          style={{ width: "200px", height: "90px", padding: "10px" }}
        />
        <Container maxWidth="xs" sx={classes.formContainer}>
          {/* Title */}
          <Typography variant="h6" sx={classes.title}>
            Sign in to account
          </Typography>
          <Typography variant="body2" sx={classes.subtitle}>
            Enter your email & password to login
          </Typography>

          {/* Email Field */}
          <Typography variant="body2">Email Address</Typography>
          <TextField
            fullWidth
            placeholder="Test@gmail.com"
            variant="outlined"
            sx={classes.textField}
            id="outlined-size-small"
            size="small"
          />

          {/* Password Field */}
          <Typography variant="body2">Password</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="*****"
            type="password"
            sx={classes.textField}
            id="outlined-size-small"
            size="small"
          />

          {/* Forgot Password */}
          <Link
            href="#"
            sx={classes.forgotPassword}
            onClick={handleForgotPassword}
          >
            Forgot password?
          </Link>

          {/* Sign In Button */}
          <Button fullWidth variant="contained" sx={classes.signInButton}  onClick={handleSignIn}>
            Sign In
          </Button>

          {/* Footer */}
          <Typography
            variant="body2"
            textAlign="center"
            sx={classes.footerText}
          >
            "O/o The Assistant Engineer (E)-III"
            <br />
            <br />
            "PEED, CPWD, Rashtrapati Bhawan"
            <br />
            <br />
            "New Delhi-110004"
            <br />
            <br />
            Developed by{" "}
            <span style={classes.footerHighlight}>
              solutions (email: solutions1401@gmail.com)
            </span>{" "}
            ❤️
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
