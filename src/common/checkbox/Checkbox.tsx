import CheckboxCp from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import clsx from 'clsx';
import { useAppWebInfoContext } from 'context';
import { ChangeEvent, ReactElement, useState } from 'react';

import CheckBoxStyledContainer from './Checkbox.Style';

interface CheckboxPropsI {
  className?: string;
  label?: string | ReactElement;
  checked?: boolean;
  onChecked?: (e?: ChangeEvent<HTMLInputElement>) => void;
  onUnChecked?: (e?: ChangeEvent<HTMLInputElement>) => void;
  disable?: boolean;
  hasBorder?: boolean;
  size?: 'medium' | 'small';
  primaryColor?: string;
  secondaryColor?: string;
}

export default function Checkbox({
  className,
  label,
  checked,
  onChecked,
  onUnChecked,
  disable,
  hasBorder = true,
  size,
  primaryColor,
  secondaryColor,
}: CheckboxPropsI) {
  const [isCheck, setIsCheck] = useState(checked);
  const { font } = useAppWebInfoContext();
  return (
    <CheckBoxStyledContainer
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      primary={primaryColor}
      secondary={secondaryColor}
      font={font}
      component="div"
    >
      <div
        className={clsx(
          {
            'border border-gray-200 rounded-lg': hasBorder,
            'border-gray-300 bg-gray-50': disable,
          },
          className,
        )}
      >
        <FormControlLabel
          control={
            <CheckboxCp
              size={size}
              onChange={(e) => {
                if (onChecked && e.target.checked) {
                  onChecked(e);
                  setIsCheck(true);
                } else if (onUnChecked && !e.target.checked) {
                  setIsCheck(false);
                  onUnChecked(e);
                }
              }}
              checked={isCheck}
            />
          }
          label={label}
        />
      </div>
    </CheckBoxStyledContainer>
  );
}
