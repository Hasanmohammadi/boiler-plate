import CheckboxCp from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import clsx from 'clsx';
import { ChangeEvent, useState } from 'react';

import CheckBoxStyledContainer from './Checkbox.Style';

interface CheckboxPropsI {
  className?: string;
  label?: string;
  checked?: boolean;
  onChecked?: (e?: ChangeEvent<HTMLInputElement>) => void;
  onUnChecked?: (e?: ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
}

export default function Checkbox({
  className,
  label,
  checked,
  onChecked,
  onUnChecked,
  disable,
}: CheckboxPropsI) {
  const [isCheck, setIsCheck] = useState(checked);
  return (
    <CheckBoxStyledContainer>
      <div
        className={clsx(
          'border border-gray-200 rounded-lg',

          {
            // 'border-Primary/200 bg-Primary/50': isCheck,
            'border-gray-300 bg-gray-50': disable,
          },
          className,
        )}
      >
        <FormControlLabel
          control={
            <CheckboxCp
              onChange={(e) => {
                if (onChecked && e.target.checked) {
                  onChecked(e);
                  setIsCheck(true);
                } else if (onUnChecked && !e.target.checked) {
                  setIsCheck(false);
                  onUnChecked(e);
                }
              }}
              checked={checked}
            />
          }
          label={label}
        />
      </div>
    </CheckBoxStyledContainer>
  );
}
