import React from "react";
import CustomSearchFieldStyles from "./customSearchField.styles";

interface CustomSearchFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    onClear: () => void;
    placeholder?: string;
    inputLabel?: string;
    styles?: {
        container?: React.CSSProperties;
        inputBox?: React.CSSProperties;
        inputField?: React.CSSProperties;
        input?: React.CSSProperties;
    };
}

const CustomSearchField: React.FC<CustomSearchFieldProps> = ({
    value,
    onChange,
    onSearch,
    onClear,
    placeholder = "Search...",
    inputLabel = "Enter value",
    styles = {},
}) => {
    const classes = CustomSearchFieldStyles;
    return (
        <div style={{ flexDirection: 'column', display: 'flex', ...styles.container }}>
            {inputLabel && (
                <div style={{ ...classes.inputBox, ...styles.inputBox }}>
                    <label>{inputLabel}</label>
                </div>
            )}

            {/* Search Input Field */}
            <div style={{ ...classes.inputField, ...styles.inputField }}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{ ...classes.input, ...styles.input }}
                    onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            onSearch();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default CustomSearchField;