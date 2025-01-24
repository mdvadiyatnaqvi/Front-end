const forgotPasswordStyles = {
    containerFirst: {
        margin: "0",
        padding: "0",
        overFlowX: "hidden",
    },

    mainContainer: {
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 1199.98px)": {
            display: "none",
            width: "0",
            height: "0",
        },
    },

    formClass: {
        background: "rgb(224,243,247)",
        margin: "0px",
        padding: "0px",
        "@media (max-width: 910px)": {
            background: 'url("public/images/blur-bg.jpg")',
            backgroundSize: "cover",
            repeat: "no-repeat",
            height: "100vh",
        },
    },

    formContainer: {
        backgroundColor: "#F9FBFF",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        padding: "10px",
        "@media (max-width: 910px)": {
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
        fontSize: "14px",
    },

    textField: {
        marginBottom: "10px",
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#E9F3FF",
        },
    },

    signInLink: {
        display: "block",
        textAlign: "right",
        fontSize: "14px",
        color: "rgb(250,131,12)",
        marginBottom: "20px",
        textDecoration: "none",
    },

    submitButton: {
        backgroundColor: "rgb(250,131,12)",
        color: "white",
        padding: "5px",
        borderRadius: "5px",
        fontSize: "16px",
        "&:hover": {
            backgroundColor: "#E68900",
        },
    },

    footer: {
        fontSize: "12px",
        color: "#888888",
        marginTop: "15px",
    },

    footerHighlight: {
        color: "rgb(250,131,12)",
    },
};

export default forgotPasswordStyles;