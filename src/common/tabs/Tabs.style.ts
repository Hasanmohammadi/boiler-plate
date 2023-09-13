import { Box, styled } from '@mui/material';

const TabsStyledContainer = styled(Box)`
  .ejSmPP {
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
  }
  .sc-bcXHqe {
    padding: 0;
  }

  .tabs-position-center > .MuiTabs-scroller > .MuiTabs-flexContainer {
    place-content: center;
  }
  .tabs-position-end > .MuiTabs-scroller > .MuiTabs-flexContainer {
    place-content: end;
  }
` as typeof Box;

export default TabsStyledContainer;
