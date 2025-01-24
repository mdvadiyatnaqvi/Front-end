import React from "react";
import customTableStyles from "./customTable.styles";

const CustomTable: React.FC<any> = ({ columns, data }) => {
  return (
    <div style={{ width: "78vw" }}>
      <div style={customTableStyles.tableContainer}>
        <div
          style={{ maxHeight: "400px", overflowY: "auto", overflowX: "scroll" }}
        >
          <table style={customTableStyles.table}>
            <thead>
              <tr>
                {columns.map((col: any) => (
                  <th
                    key={col.key}
                    style={{
                      ...customTableStyles.tableHeader,
                      textAlign: "left",
                      minWidth: col.width || "150px", // Apply width from column definition, or "150px" as default
                      // If it's the last column (Action column), make it sticky
                      position: col.key === "action" ? "sticky" : "relative",
                      right: col.key === "action" ? "0" : "auto", // Stick it to the right
                      backgroundColor:
                        col.key === "action" ? "#fff" : "inherit", // Ensure background color for sticky header
                      zIndex: col.key === "action" ? 1 : "auto", // Ensure sticky column stays on top
                    }}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((row: any, rowIndex: number) => (
                  <tr key={rowIndex} style={customTableStyles.tableRow}>
                    {columns.map((col: any) => (
                      <td
                        key={col.key}
                        style={{
                          ...customTableStyles.tableCell,
                          width: col.width || "auto", // Apply column width to each td
                          position:
                            col.key === "action" ? "sticky" : "relative",
                          right: col.key === "action" ? "0" : "auto", // Stick it to the right
                          backgroundColor:
                            col.key === "action" ? "#fff" : "inherit", // Background color for sticky column
                        }}
                      >
                        {col.key === "action" ? (
                          <button
                            style={{
                              padding: "5px 10px",
                              backgroundColor: "#4caf50",
                              color: "#fff",
                              border: "none",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() => alert(`Update ${row.quarterId}`)} // Handle update click
                          >
                            Update
                          </button>
                        ) : (
                          row[col.key] // Render other column data
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length}>No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomTable;
