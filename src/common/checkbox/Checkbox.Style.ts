import { Box, styled } from '@mui/material';

interface ButtonPropsI {
  primary?: string;
  secondary?: string;
}

const CheckBoxStyledContainer = styled(Box)<ButtonPropsI>`
  .MuiButtonBase-root {
    padding: 0;
  }
  .MuiTypography-root {
    margin: 0 8px;
  }
  path {
    color: ${(props: ButtonPropsI) => props.primary};
  }
  label {
    margin: 0;
  }
` as typeof Box;

export default CheckBoxStyledContainer;
