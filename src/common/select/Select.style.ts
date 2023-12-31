import { Select } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SelectPropsI {
  font?: string;
}

const SelectStyled = styled(Select)<SelectPropsI>`
  border-radius: 8px;

  .MuiPaper-root {
    max-height: 300px;
  }

  .MuiFormLabel-root {
    top: 20px;
    background: white;
    z-index: 1;
    width: fit-content;
    left: 10px;
  }

  .MuiSelect-select {
    font-family: ${(props: SelectPropsI) => props.font};
  }

  &.ghost > .MuiSelect-select-ktaPne {
    padding-right: 12px;
    font-weight: 500;
    font-size: 18px;
    padding-top: 20px;
  }

  &.disabled {
    background: #efefef;
  }

  &.rtl > .MuiSelect-select {
    padding: 0;
    display: flex;
  }
` as typeof Select;

export default SelectStyled;
