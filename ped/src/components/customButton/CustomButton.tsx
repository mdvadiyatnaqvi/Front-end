import React from 'react';
import { Button } from '@mui/material';

interface CustomButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'; // Remove "default"
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    variant = 'contained',
    color = 'warning',
    size = 'small',
    onClick,
    children,
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            size={size}
            onClick={onClick}
        >
            {children}
        </Button>
    );
};

export default CustomButton;