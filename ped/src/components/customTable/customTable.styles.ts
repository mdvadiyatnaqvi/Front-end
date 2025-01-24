const customTableStyles = {
  tableContainer: {
    margin: "2px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    // overflow: "hidden",
    // maxWidth: "100vw"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as "collapse", // Type narrowed to valid value
  },
  tableHeader: {
    backgroundColor: "#B0BEC5", // Light grey background
    color: "#212121", // Dark text color for better contrast
    padding: "10px",
    fontWeight: "bold",
    borderBottom: "2px solid #ddd",
  },
  
  tableRow: {
    // Apply the styles directly in a way that CSSProperties can handle
    ":nth-child(even)": {
      backgroundColor: "#f9f9f9",
    },
    ":hover": {
      backgroundColor: "#f1f1f1",
    },
  } as React.CSSProperties,
  tableCell: {
    padding: "4px",
    borderBottom: "1px solid #ddd",
  },
  mainBox: {
    textAlign: "center",
    marginTop: "20px",
    color: "purple",
  },
  previous: {
    backgroundColor: "purple",
    color: "white",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
  },
  dataLength: {
    textAlign: "left",
  },
};

export default customTableStyles;