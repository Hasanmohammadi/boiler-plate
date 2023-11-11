import { Box, styled } from '@mui/material';

interface RadioButtonPropsI {
  primaryColor?: string;
  secondaryColor?: string;
}

const RadioButtonStyled = styled(Box)<RadioButtonPropsI>`
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
  .Mui-checked {
    color: ${(props: RadioButtonPropsI) => props.primaryColor};
  }
  .MuiButtonBase-root:hover {
    background-color: rgb(133 133 133 / 4%);
  }
` as typeof Box;

export default RadioButtonStyled;
