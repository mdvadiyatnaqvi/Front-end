import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

interface CustomInputProps {
    name: string;
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    size?: "small" | "medium"; // Size of the input box
    width?: string | number; // width for the input
    isMandatory?: boolean; // Flag to indicate whether the field is mandatory
}

const CustomInput: React.FC<CustomInputProps> = ({
    name,
    label,
    value,
    onChange,
    placeholder,
    size = "small",
    width = "126px",
    isMandatory = false, // Default to false if not provided
}) => {
    return (
        <Grid md={2} xs={12} style={{ padding: "5px 10px" }}>
            <Typography
                variant="body2"
                sx={{
                    display: 'inline',
                    whiteSpace: 'nowrap'
                }}>
                {label}
                {isMandatory && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
            </Typography>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: size === 'small' ? '6px 10px' : '8px 12px',
                    fontSize: size === 'small' ? '14px' : '16px',
                    // backgroundColor: '#E9F3FF',
                    marginRight: '12px',
                    width: width, // Ensure width is passed as a prop or has a fallback value
                }}
            />
        </Grid>
    );
};

export default CustomInput;