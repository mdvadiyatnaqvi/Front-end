import { Typography } from '@mui/material';
import React from 'react';

interface CustomDatePickerProps {
    name: string;              // Name of the input field
    label: string;             // Label for the input field
    value: string | undefined; // Value of the input field, can be a string (date) or undefined
    onChange: (value: string, name: string) => void; // Function to handle the change in value
    isMandatory: boolean;      // Flag to mark the field as mandatory
    size?: 'small' | 'large'; // Optional size prop for the input (default: 'small')
    width?: string;            // Optional width for the input (default: '148px')
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    name,
    label,
    value,
    onChange,
    isMandatory,
    size = 'small',
    width = '128px',
}) => {
    // Handle date change
    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDate = e.target.value;  // Capture the new date
        onChange(newDate, name);  // Call onChange function passed from parent
    };

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
            <input
                type="date"
                id={name}
                name={name}
                value={value || ''}
                onChange={handleDateChange}
                style={{
                    padding: '4px 10px', // Smaller padding for a more compact feel
                    borderRadius: '4px', // Rounded corners
                    border: '1px solid #89c0ea', // Lighter border color for a subtle look
                    width: width,
                    height: '20px', // Reduced height to make it smaller
                    fontSize: size === 'small' ? '13px' : '15px', // Smaller font size for a cleaner look
                    outline: 'none', // Remove outline on focus
                    backgroundColor: '#f9f9f9', // Light background for subtle contrast
                    color: '#333', // Dark text for better readability
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Soft shadow to add depth
                    transition: 'border-color 0.3s ease', // Smooth transition for border color
                    marginBottom: '8px', // Slightly smaller bottom margin for compactness
                }}
            />
        </div>
    );
};

export default CustomDatePicker;