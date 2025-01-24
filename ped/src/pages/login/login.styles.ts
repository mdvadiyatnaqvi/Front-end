import { height } from "@mui/system";

const loginstyles = {
  containerFirst: {
    margin: "0",
    padding: "0",
    overFlowX: "hidden",
  },

  mainContainer: {
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 1024px)": {
      display: "none",
      width: "0",
      Height: "0",
    },
    // "@media (max-width: 575.98px)": {
    //   display: "none",
    //   width: "0",
    //   height: "0",
    // }, // Extra small devices (portrait phones)
    // "@media (max-width: 767.98px)": {
    //   display: "none",
    //   width: "0",
    //   height: "0",
    // }, // Small devices (landscape phones)
    // "@media (max-width: 991.98px)": {
    //   display: "none",
    //   width: "0",
    //   height: "0",
    // }, // Medium devices (tablets)

    // "@media (max-width: 1399.98px)": {
    //   display: "none",
    //   width: "0",
    //   height: "0",
    // },
  },

  formLabel: {
    color: "white",
    fontSize: "12px",
    padding: "10px",
    marginBottom: "0px",
  },

  formClass: {
    background: "rgb(224,243,247)",
    margin: "0px",
    padding: "0px",

    "@media (max-width: 1024px)": {
      background: 'url("public/images/blur-bg.jpg")',
      backgroundSize: "cover",
      repeat: "no-repeat",
      height: "100vh",
    },
    // "@media (max-width: 575.98px)": {
    //   background: 'url("public/images/blur-bg.jpg")',
    //   backgroundSize: "cover",
    //   repeat: "no-repeat",
    //   height: "100vh",
    // }, // Extra small devices (portrait phones)
    // "@media (max-width: 767.98px)": {
    //   background: 'url("public/images/blur-bg.jpg")',
    //   backgroundSize: "cover",
    //   repeat: "no-repeat",
    //   height: "100vh",
    // }, // Small devices (landscape phones)
    // "@media (max-width: 991.98px)": {
    //   background: 'url("public/images/blur-bg.jpg")',
    //   backgroundSize: "cover",
    //   repeat: "no-repeat",
    //   height: "100vh",
    // }, // Medium devices (tablets)
    // "@media (max-width: 1199.98px)": {
    //   background: 'url("public/images/blur-bg.jpg")',
    //   backgroundSize: "cover",
    //   repeat: "no-repeat",
    //   height: "100vh",
    // }, // Large devices (desktops)
    // "@media (max-width: 1399.98px)": {
    //   background: 'url("public/images/blur-bg.jpg")',
    //   backgroundSize: "cover",
    //   repeat: "no-repeat",
    //   height: "100vh",
    // },
  },

  formContainer: {
    backgroundColor: "#F9FBFF",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",

    "@media (max-width: 1199px)": {
      maxWidth: "362px",
    },
  },

  title: {
    fontWeight: "bold",
    color: "rgb(250,131,12)",
    marginBottom: "5px",
  },

  subtitle: {
    color: "rgb(250,131,12)",
    marginBottom: "30px",
    fontSize: "12px",
  },

  textField: {
    marginBottom: "10px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#E9F3FF",
    },
  },

  forgotPassword: {
    display: "block",
    textAlign: "right",
    fontSize: "12px",
    color: "rgb(250,131,12)",
    marginBottom: "20px",
    textDecoration: "none",
  },

  signInButton: {
    backgroundColor: "rgb(250,131,12)",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#E68900",
    },
  },

  footerText: {
    fontSize: "12px",
    color: "#888888",
    marginTop: "15px",
  },

  footerHighlight: {
    color: "rgb(250,131,12)",
  },
};

export default loginstyles;
