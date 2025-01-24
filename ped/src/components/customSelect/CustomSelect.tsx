import { Typography } from "@mui/material";
import React from "react";

interface CustomSelectProps {
    name: string;
    label: string;
    value: any;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Array<string | number>;
    size?: "small" | "medium";
    width?: string | number;
    isMandatory?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    name,
    label,
    value,
    onChange,
    options,
    size = "small",
    width = "148px",
    isMandatory = false,
}) => {
    return (
        <div style={{ padding: "5px 10px" }}>
            <Typography
                variant="body2"
                sx={{
                    display: 'inline',
                    whiteSpace: 'nowrap'
                }}>
                {label}
                {isMandatory && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
            </Typography>
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                style={{
                    padding: "5px",
                    borderRadius: "6px",  // Slightly rounded corners
                    border: "1px solid rgb(137, 192, 234)",  // Soft border color
                    width: width,  // Full width
                    // height: "35px",  // Fixed height
                    fontSize: size === "small" ? "14px" : "16px",  // Dynamic font size based on 'size' prop
                    outline: "none",  // Remove outline
                    backgroundColor: "#fff",  // White background
                    color: "#333",  // Dark text for contrast
                    transition: "border 0.3s ease, box-shadow 0.3s ease",  // Smooth transition for focus
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",  // Light shadow for a floating effect
                }}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;