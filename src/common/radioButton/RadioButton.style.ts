import { Box, styled } from '@mui/material';

const RadioButtonStyled = styled(Box)`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      '. . .'
      '. . .'
      '. . .';
    gap: 14px;
  }
  .MuiFormControlLabel-root {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
` as typeof Box;

export default RadioButtonStyled;
