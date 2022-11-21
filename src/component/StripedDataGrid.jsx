import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { experimentalStyled as styled, alpha } from '@mui/material/styles';

const ODD_OPACITY = 0.2;

export const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
    //   backgroundColor: theme.palette.grey[200],
      backgroundColor: 'white',
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  }));
  
  export default StripedDataGrid;