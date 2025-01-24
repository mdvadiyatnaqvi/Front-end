// CustomSearchComponent.tsx

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CustomButton from '../customButton/CustomButton';
import CustomSearchField from './customFieldBox/CustomSearchField';
import customSearchComponentStyles from './customSearchComponent.styles'; // Import styles

interface CustomSearchComponentProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
  handleClear: () => void;
  placeholder: string;
  inputLabel: string;
  title: string;
  styles?: {
    container?: React.CSSProperties;
    inputField?: React.CSSProperties;
  };
}

const CustomSearchComponent: React.FC<CustomSearchComponentProps> = ({
  searchText,
  setSearchText,
  handleSearch,
  handleClear,
  placeholder,
  inputLabel,
  title,
  styles = {},
}) => {
  return (
    <Box sx={customSearchComponentStyles.container}> {/* Apply container style */}
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box sx={customSearchComponentStyles.headerBox}> {/* Apply headerBox style */}
            <Typography variant="h6">{title}-</Typography>
          </Box>

          <Box sx={customSearchComponentStyles.searchContainer}> {/* Apply searchContainer style */}
            <CustomSearchField
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.target.value)
              }
              onSearch={handleSearch}
              onClear={handleClear}
              placeholder={placeholder}
              inputLabel={inputLabel}
              styles={{
                container: { marginBottom: "20px", paddingRight: 6 },
                inputField: { borderColor: "rgb(137 192 234)" },
              }}
            />
            <CustomButton
              variant="contained"
              size="small"
              onClick={handleSearch}
            >
              Search
            </CustomButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomSearchComponent;
