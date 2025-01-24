// customSearchComponent.styles.ts

import { SxProps, Theme } from '@mui/material';

const customSearchComponentStyles: { [key: string]: SxProps<Theme> } = {
  container: {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    padding: '5px',
    margin: '0px 5px',
    minWidth: '380px',
    marginBottom: '15px',
    background: 'white',
  },
  headerBox: {
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
    padding: '5px',
    margin: '0px 1px',
    minWidth: '380px',
    borderLeft: '4px solid orange',
    background: 'white',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    paddingRight: 2,
    marginTop: 1,
  },
};

export default customSearchComponentStyles;