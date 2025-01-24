const makePaymentStyles = {
    container: {
        margin: "0px",
        backgroundColor: "#e9f3ffed",
    },
    sectionBox: {
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        padding: "5px",
        margin: "0px 5px",
        minWidth: "380px",
        marginBottom: "15px",
        background: "white",
    },
    searchBox: {
        boxShadow: " rgba(0, 0, 0, 0.04) 0px 3px 5px;",
        padding: "5px",
        margin: "0px 1px",
        minWidth: "380px",
        borderLeft: "4px solid orange",
        background: "white",
    },
    inputBox: {
        margin: "5px",
        padding: "10px",
    },
    inputField: {
        marginBottom: "10px",
        "& .MuiOutlinedInput-root": {
            backgroundColor: "#E9F3FF",
        },
    },
    searchInput: {
        backgroundColor: "orange",
        borderRadius: "7px",
        border: "orange",
        maxWidth: "100px",
        margin: "0px 20px",
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: "none",
            },
            "&:hover fieldset": {
                border: "none",
            },
            "&.Mui-focused fieldset": {
                border: "none",
            },
        },
    },
    formGrid: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    gridItem: {
        padding: "5px 10px",
    },
    formControl: {
        minWidth: 180,
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "rgb(137 192 234)",
                height: "35px",
            },
            "&:hover fieldset": {
                border: "1px solid black",
            },
        },
    },
    footer: {
        textAlign: "center",
        padding: "10px 0",
    },
    paymentBox: {
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        padding: "5px",
        margin: "20px 0px",
        minWidth: "380px",
        background: "white",
    },
    paymentHeader: {
        boxShadow: " rgba(0, 0, 0, 0.04) 0px 3px 5px;",
        padding: "5px",
        margin: "0px 1px",
        minWidth: "380px",
        borderLeft: "4px solid orange",
    },
};

export default makePaymentStyles;