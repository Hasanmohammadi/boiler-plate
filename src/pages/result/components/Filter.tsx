import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  styled,
} from '@mui/material';
import { useAppWebInfoContext } from 'context';
import React, { useState } from 'react';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBoxPropsI {
  options: FilterOption[];
  filterName: string;
}

export default function FilterBox({
  filterName,
  options,
}: FilterBoxPropsI) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const { siteColors } = useAppWebInfoContext();

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name } = event.target;
    const updatedCheckedItems = checkedItems.includes(name)
      ? checkedItems.filter((item) => item !== name)
      : [...checkedItems, name];

    setCheckedItems(updatedCheckedItems);
  };
  return (
    <Box
      sx={{
        '.MuiFormControlLabel-root': {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row-reverse',
        },

        '.jdxDrP.Mui-checked, .jdxDrP.MuiCheckbox-indeterminate': {
          color: siteColors.primary,
        },
        '.MuiButtonBase-root:hover': {
          backgroundColor: '#8988880f',
        },
      }}
    >
      <FormGroup>
        {options.map((option) => (
          <FormControlLabel
            // onClick={() => {
            //   router.query[filterName] = [option.value];
            //   router.push(router);
            // }}
            key={option.value}
            control={
              <Checkbox
                // checked={router.asPath.includes(option.value)}
                onChange={handleCheckboxChange}
                name={option.value}
              />
            }
            label={option.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
