import { Box, Slider, styled } from '@mui/material';
import { useAppWebInfoContext } from 'context';
import { convertToPersianNumbers } from 'helpers';
import { useState } from 'react';

interface PriceFilterPropsI {
  currency?: string;
  className?: string;
  minValue: number;
  maxValue: number;
}

interface PriceFilterStylePropsI {
  primary?: string;
  secondary?: string;
}

const PriceFilterContainerStyled = styled(Box)<PriceFilterStylePropsI>`
  .MuiSlider-root {
    color: ${(props: PriceFilterStylePropsI) => props.primary};
  }
  .MuiSlider-thumb:hover {
    box-shadow: ${(props: PriceFilterStylePropsI) =>
      `0px 0px 0px 8px ${props.secondary as string}`} !important;
  }
  .Mui-active {
    box-shadow: ${(props: PriceFilterStylePropsI) =>
      `0px 0px 0px 8px ${props.secondary as string}`} !important;
  }
` as typeof Box;

function valuetext(value: number) {
  return `${value}°C`;
}

export default function RangeFilter({
  className,
  currency,
  maxValue,
  minValue,
}: PriceFilterPropsI) {
  const { siteColors } = useAppWebInfoContext();

  const [value, setValue] = useState<number[]>([minValue, maxValue]);
  console.log('🚀 ~ file: RangeFilter.tsx:45 ~ value:', value[0]);

  const handleChange = (_: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <PriceFilterContainerStyled
      className={className}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      primary={siteColors.primary}
      secondary={siteColors.secondary}
      component="div"
      sx={{ direction: 'ltr' }}
    >
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        getAriaValueText={valuetext}
        min={minValue}
        max={maxValue}
      />
      <div className="flex justify-between">
        <span className="text-sm font-medium text-gray-400">
          {convertToPersianNumbers(value?.[0]?.toLocaleString(), false)}
        </span>
        <span className="text-sm font-medium text-gray-400">
          {convertToPersianNumbers(value?.[1]?.toLocaleString(), false)}
        </span>
      </div>
    </PriceFilterContainerStyled>
  );
}
