import Box from "@mui/material/Box";
import { alpha } from '@mui/material/styles';

const BoxName = ({children}) => {
  return (
   <Box
   sx={        
    (theme) => ({
      ...theme.typography.body,
      boxShadow: 1,
      fontWeight: "bold",
      borderRadius: 2,
      borderColor: "primary.main",
      width: 200,
      textAlign: "center",
      p: 1.5,
        backgroundColor:alpha(
        theme.palette.primary.main,
        0.2 + theme.palette.action.selectedOpacity,
      ),
    })
}
   >
    {children}
   </Box>
  )
}

export default BoxName