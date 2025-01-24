import {
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import forgotPasswordStyles from "./forgotPassword.styles";


const ForgotPassword = () => {
  const classes = forgotPasswordStyles;
  const navigate = useNavigate();

  function handleSignIn() {
    navigate("/login");
  }

  return (
    <Grid container sx={classes.containerFirst}>
      <Grid item sm={12} xs={12} md={7} sx={classes.mainContainer}>
        <img src="public/images/login-bg.jpg" alt="bg" />
      </Grid>
      <Grid
        item
        sm={12}
        xs={12}
        md={5}
        sx={classes.formClass}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <img
          src="public/images/cpwd-logo.png"
          alt=""
          style={{ width: "200px", padding: "10px" }}
        />
        <Container maxWidth="xs" sx={classes.formContainer}>
          {/* Title */}
          <Typography variant="h5" sx={classes.title}>
            Forgot Password?
          </Typography>
          <Typography variant="body2" sx={classes.subtitle}>
            In order to receive your access code by email, please enter the
            email you provided during the registration process.
          </Typography>

          {/* Email Field */}
          <Typography variant="body2">Email Address</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Type@gmail.com"
            sx={classes.textField}
            id="outlined-size-small"
            size="small"
          />

          {/* Mobile Number Field */}
          <Typography variant="body2">Mobile No.</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="9999999999"
            type="number"
            sx={classes.textField}
            id="outlined-size-small"
            size="small"
          />

          {/* Link to Sign In */}
          <Link href="#" sx={classes.signInLink} onClick={handleSignIn}>
            Sign In?
          </Link>

          {/* Submit Button */}
          <Button fullWidth variant="contained" sx={classes.submitButton}>
            Submit
          </Button>

          {/* Footer */}
          <Typography variant="body2" textAlign="center" sx={classes.footer}>
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

export default ForgotPassword;