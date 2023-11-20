import { SxProps, Theme } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import clsx from 'clsx';
import { useAppWebInfoContext } from 'context';

import RadioButtonStyled from './RadioButton.style';

interface RadioButtonPropsI {
  className?: string;
  sx?: SxProps<Theme>;
  defaultValue?: string;
  label?: string;
  grid?: boolean;
  radios?: {
    value: string;
    radioText: string | React.ReactNode;
    size?: 'small' | 'medium';
    children?: React.ReactNode;
    className?: string;
  }[];
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => void;
  primaryColor?: string;
  secondaryColor?: string;
  value?: string;
}

export default function RadioButton({
  className,
  label,
  radios,
  defaultValue,
  onChange,
  grid,
  sx,
  primaryColor,
  secondaryColor,
  value,
}: RadioButtonPropsI) {
  const { font } = useAppWebInfoContext();

  return (
    <RadioButtonStyled
      className={className}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      font={font}
      component="div"
    >
      <FormControl className="w-full">
        {label && (
          <FormLabel id="demo-radio-buttons-group-label">
            {label}
          </FormLabel>
        )}
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={defaultValue}
          name="radio-buttons-group"
          onChange={onChange}
          className={clsx('w-full', { grid })}
          sx={sx}
          value={value}
        >
          {radios?.map(
            ({
              value: radioValue,
              radioText,
              size,
              children,
              className: radioClassName,
            }) => (
              <div className={radioClassName}>
                <FormControlLabel
                  value={radioValue}
                  control={<Radio size={size} />}
                  label={radioText}
                />
                {children}
              </div>
            ),
          )}
        </RadioGroup>
      </FormControl>
    </RadioButtonStyled>
  );
}
