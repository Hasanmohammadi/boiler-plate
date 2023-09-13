import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const SelectSearchContainerStyled = styled(Box)`
  .MuiInputBase-root {
    padding: 3px;
    border-radius: 8px;
    padding-left: 8px;
  }

  .hasIcon > .MuiInputBase-root {
    padding-left: 40px;
  }
` as typeof Box;

export default SelectSearchContainerStyled;
