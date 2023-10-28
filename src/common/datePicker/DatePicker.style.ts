import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const DatePickerStyledContainer = styled(Box)`
  .DatePicker__input {
    width: 100%;
    border: none;
    padding: 0em 0em;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #344054;
    outline: none;
  }
  .DatePicker {
    border: none;
    z-index: 0;
  }
  .RangeDay > .DatePicker {
    width: 100%;
  }
  .SingleDay > .DatePicker {
    width: 100%;
  }
  .sm > .RangeDay > .DatePicker {
    width: 100%;
  }
  .sm > .RangeDay > .DatePicker > .datepicker-input {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .sm {
    font-size: 12px;
    font-weight: 600;
    color: #344054;
  }
` as typeof Box;

export default DatePickerStyledContainer;
