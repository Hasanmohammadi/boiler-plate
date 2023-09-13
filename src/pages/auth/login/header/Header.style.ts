import { Box, styled } from '@mui/material';

interface HeaderPropsI {
  backgroundColor: string;
}

const HeaderStyledContainer = styled(Box)<HeaderPropsI>`
  background-color: ${({ backgroundColor }: HeaderPropsI) =>
    `${backgroundColor}`};
` as typeof Box;

export default HeaderStyledContainer;
