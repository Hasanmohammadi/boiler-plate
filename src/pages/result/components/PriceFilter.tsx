import { Box, Slider, styled } from '@mui/material';
import { useAppWebInfoContext } from 'context';
import { useState } from 'react';

interface PriceFilterPropsI {
  currency?: string;
  className?: string;
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

export default function PriceFilter({
  className,
  currency,
}: PriceFilterPropsI) {
  const { siteColors } = useAppWebInfoContext();
  // const [value, setValue] = useState<string[]>([
  //   totalFareAmounts[0]?.toString(),
  //   totalFareAmounts[1]?.toString(),
  // ])

  // const rangeSelector = (event: any, newValue: any) => {
  //   router.query.price = newValue
  //   router.push(router)
  //   setValue(newValue)
  // }
  // useEffect(() => {
  //   setValue(router.query.price as string[])
  // }, [router.query.price?.[0]])

  const [value, setValue] = useState<number[]>([0, 100]);

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
    >
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="flex justify-between">
        <span className="text-sm font-medium">
          {value?.[0]?.toLocaleString()} {currency}
        </span>
        <span className="text-sm font-medium">
          {value?.[1]?.toLocaleString()} {currency}
        </span>
      </div>
    </PriceFilterContainerStyled>
  );
}
