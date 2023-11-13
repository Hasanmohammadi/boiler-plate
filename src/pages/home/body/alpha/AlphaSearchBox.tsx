import { Box, MenuItem, Typography } from '@mui/material';
import { AlphaSwap } from 'assets/svg';
import clsx from 'clsx';
import { Menu, RadioButton, Select, SelectSearch } from 'common';
import { useAppWebInfoContext } from 'context';
import {
  convertToPersianNumbers,
  setFontColor,
  todayDateObject,
} from 'helpers';
import defaultDate from 'helpers/defaultDate';
import { useGetPlaces } from 'hooks/airport';
import { useRef, useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar, MinusCircle, PlusCircle, Search } from 'react-feather';
import { useForm } from 'react-hook-form';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Toolbar from 'react-multi-date-picker/plugins/toolbar';
import { useNavigate } from 'react-router-dom';

export interface DateI {
  year: number;
  month: number;
  day: number;
}

interface SearchBoxFormI {
  departure: {
    id: string;
    label: string;
  };
  arrival: {
    id: string;
    label: string;
  };
  departureDate: DateI;
  arrivalDate: {
    from: DateI;
    to: DateI;
  };
  flightClass: string;
}

interface FlightsPropsI {
  isInHeader?: boolean;
}

export default function AlphaSearchBox({ isInHeader }: FlightsPropsI) {
  const navigate = useNavigate();
  const { siteColors } = useAppWebInfoContext();

  const [wayType, setWayType] = useState<'Round-trip' | 'One Way'>(
    'One Way',
  );
  const [flightClass, setFightClass] = useState<string>('اکونومی');
  const [departureDateInput, setDepartureDateInput] = useState(
    new DateObject().convert(persian, gregorian_en).format(),
  );

  const [returnDateInput, setReturnDateInput] = useState<DateI>({
    day: 0,
    month: 0,
    year: 0,
  });

  const [originSearched, setOriginSearched] = useState<string>('');
  const [arrivalSearched, setArrivalSearched] = useState<string>('');
  const [adultCount, setAdultCount] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  const datePickerRef = useRef<{ openCalendar: () => void } | null>(null);

  const { control, watch, setValue, handleSubmit } =
    useForm<SearchBoxFormI>({
      defaultValues: {
        departure: { id: '', label: '' },
        flightClass: 'economy',
        arrival: { id: '', label: '' },
        departureDate: defaultDate().from,
        arrivalDate: {
          from: defaultDate().from,
          to: { day: 0, month: 0, year: 0 },
        },
      },
    });

  const { getPlacesData: originPlaces, placesLoading: originLoading } =
    useGetPlaces({
      count: 10,
      name: originSearched,
      queryKey: 'originPlaces',
    });

  const {
    getPlacesData: destinationPlaces,
    placesLoading: destinationLoading,
  } = useGetPlaces({
    count: 10,
    name: arrivalSearched,
    queryKey: 'destinationPlaces',
  });

  const onSubmit = (data: SearchBoxFormI) => {
    console.log('🚀 ~ file: Flights.tsx:51 ~ onSubmit ~ data:', data);
    navigate('/result');
  };

  function handleDepartureDate({
    day,
    year,
    month,
  }: {
    day: number;
    year: number;
    month: { number: number };
  }) {
    setDepartureDateInput(`${year}/${month?.number}/${day}`);
  }

  function handleReturnDate(
    data: {
      day: number;
      year: number;
      month: { number: number };
    }[],
  ) {
    setReturnDateInput({
      day: data?.[1]?.day || data?.[0]?.day,
      month: data?.[1]?.month?.number || data?.[0]?.month?.number,
      year: data?.[1]?.year || data?.[0]?.year,
    });
  }
  return (
    <Box
      sx={{ direction: 'rtl' }}
      className={clsx(' w-4/5 m-auto rounded-lg py-4', {
        'pt-0': isInHeader,
      })}
    >
      <div>
        <div>
          <RadioButton
            defaultValue={wayType}
            value={wayType}
            primaryColor={siteColors.primary}
            sx={{ display: 'flex', flexDirection: 'row', gap: '18px' }}
            onChange={(e) =>
              setWayType(e.target.value as 'Round-trip' | 'One Way')
            }
            radios={[
              {
                radioText: (
                  <Typography
                    sx={{
                      color:
                        wayType === 'One Way'
                          ? siteColors.primary
                          : 'black',
                    }}
                  >
                    یک طرفه
                  </Typography>
                ),
                value: 'One Way',
                className: 'w-22',
                size: isInHeader ? 'small' : 'medium',
              },
              {
                radioText: (
                  <Typography
                    sx={{
                      color:
                        wayType === 'Round-trip'
                          ? siteColors.primary
                          : 'black',
                    }}
                  >
                    دو طرفه
                  </Typography>
                ),
                value: 'Round-trip',
                className: 'w-22',
                size: isInHeader ? 'small' : 'medium',
              },
            ]}
          />
        </div>
        <div className="flex bg-white w-full rounded-lg max-w-7xl ">
          <div
            className={clsx(
              'flex w-1/2 justify-between border flex-row border-gray-300 rounded-lg rounded-l-none',
              { 'py-2': !isInHeader, 'h-11': isInHeader },
            )}
          >
            <SelectSearch
              direction="rtl"
              loading={originLoading}
              hasBorder={false}
              className="w-1/2"
              control={control}
              name="departure"
              setTextSearched={setOriginSearched}
              textSearched={originSearched}
              placeholder="مبدا"
              items={originPlaces?.map(({ iataCode, isCity, title }) => ({
                id: iataCode,
                label: title,
                isCity,
              }))}
              initialValue={[{ id: '', label: '', isCity: false }]}
            />
            <div className="cursor-pointer relative mx-4 border-r border-dashed border-r-gray-500">
              <AlphaSwap className="absolute cursor-pointer top-2.5 -right-3" />
            </div>
            <SelectSearch
              direction="rtl"
              loading={destinationLoading}
              hasBorder={false}
              className="w-1/2 "
              control={control}
              name="arrival"
              setTextSearched={setArrivalSearched}
              textSearched={arrivalSearched}
              placeholder="مقصد"
              items={destinationPlaces?.map(
                ({ iataCode, isCity, title }) => ({
                  id: iataCode,
                  label: title,
                  isCity,
                }),
              )}
              initialValue={[{ id: '', label: '', isCity: false }]}
            />
          </div>
          <div
            className={clsx(
              'py-1 border border-gray-300 border-r-0 pr-2 w-1/6 flex gap-4',
              {
                'h-11 items-center': isInHeader,
              },
            )}
          >
            <Calendar color="#A2A2A2" size={40} className="mt-1" />
            <div>
              {!isInHeader && <p className="mr-2">تاریخ رفت</p>}
              <Box
                sx={{
                  '.rmdp-day.rmdp-selected span:not(.highlight)': {
                    backgroundColor: siteColors.primary,
                  },
                  '.rmdp-toolbar div': {
                    backgroundColor: siteColors.secondary,
                  },
                  '.rmdp-day.rmdp-today span': {
                    backgroundColor: siteColors.secondary,
                  },
                  '.rmdp-week-day': {
                    color: 'black',
                  },
                  '.rmdp-input': {
                    border: 'none',
                  },
                  '.rmdp-input:focus': {
                    border: 'none',
                    boxShadow: 'none',
                  },
                  '.rmdp-day rmdp-selected': {
                    backgroundColor: siteColors.primary,
                  },
                  '.rmdp-day:not(.rmdp-disabled,.rmdp-day-hidden) span:hover':
                    {
                      backgroundColor: siteColors.secondary,
                    },
                  '.rmdp-arrow-container:hover': {
                    backgroundColor: siteColors.secondary,
                  },
                }}
              >
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  plugins={[<Toolbar position="bottom" />]}
                  minDate={new DateObject()
                    .convert(persian, gregorian_en)
                    .format()}
                  value={new DateObject()
                    .convert(persian, persian_fa)
                    .format()}
                  onChange={(date) =>
                    handleDepartureDate(date as DateObject)
                  }
                  numberOfMonths={1}
                  inputMode="text"
                  range={false}
                  className="cursor-pointer"
                />
              </Box>
            </div>
          </div>
          <Box
            className={clsx(
              'py-1 border border-gray-300 pr-2 w-1/6 flex gap-4',
              {
                'cursor-default opacity-30': wayType === 'One Way',
                'h-11 items-center': isInHeader,
              },
            )}
            onClick={() => {
              setWayType('Round-trip');
              if (wayType === 'One Way') {
                setTimeout(() => {
                  datePickerRef?.current?.openCalendar();
                }, 0);
              }
            }}
          >
            <Calendar
              color="#A2A2A2"
              size={24}
              className={clsx({ 'mt-3': !isInHeader })}
            />
            <div>
              {!isInHeader && <p className="text-center">تاریخ برگشت</p>}
              {wayType === 'One Way' ? (
                <p>
                  {returnDateInput.day
                    ? convertToPersianNumbers(
                        `${returnDateInput.year}/${returnDateInput.month}/${returnDateInput.day}`,
                      )
                    : convertToPersianNumbers(departureDateInput)}
                </p>
              ) : (
                <Box
                  sx={{
                    '.rmdp-range': {
                      backgroundColor: siteColors.primary,
                    },
                    '.rmdp-day:not(.rmdp-disabled,.rmdp-day-hidden) span:hover':
                      {
                        backgroundColor: siteColors.secondary,
                      },
                    '.rmdp-week-day': {
                      color: 'black',
                    },
                    '.rmdp-arrow-container:hover': {
                      backgroundColor: siteColors.secondary,
                    },
                    '.rmdp-toolbar div': {
                      backgroundColor: siteColors.secondary,
                    },
                    '.rmdp-day.rmdp-today span': {
                      backgroundColor: siteColors.secondary,
                    },
                    '.rmdp-day.rmdp-selected span:not(.highlight)': {
                      backgroundColor: siteColors.primary,
                    },
                  }}
                >
                  <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    plugins={[<Toolbar position="bottom" />]}
                    minDate={departureDateInput}
                    ref={datePickerRef}
                    render={() => (
                      <Box
                        className="cursor-pointer text-start"
                        onClick={() =>
                          datePickerRef?.current?.openCalendar()
                        }
                      >
                        {returnDateInput.day
                          ? convertToPersianNumbers(
                              `${returnDateInput.year}/${returnDateInput.month}/${returnDateInput.day}`,
                            )
                          : convertToPersianNumbers(departureDateInput)}
                      </Box>
                    )}
                    value={[
                      departureDateInput,
                      `${returnDateInput.year}/${returnDateInput.month}/${returnDateInput.day}`,
                    ]}
                    onChange={(date) =>
                      handleReturnDate(date as DateObject[])
                    }
                    numberOfMonths={1}
                    inputMode="text"
                    range
                  />
                </Box>
              )}
            </div>
          </Box>
          <Menu
            className={clsx('border border-gray-300 w-1/6 py-2', {
              'h-11 py-0': isInHeader,
            })}
            btnClassName="h-[42px]"
            hasArrow={false}
            btnText={
              <div className="flex text-base items-center font-normal">
                <p className="w-5">
                  {convertToPersianNumbers(
                    String(adultCount + children + infants),
                    false,
                  )}
                </p>
                <p className="font-medium"> مسافر،</p>
                <p className="mr-1">{flightClass}</p>
              </div>
            }
            menuItems={[
              {
                text: (
                  <Box
                    sx={{ direction: 'rtl' }}
                    className="flex gap-8 justify-between w-full"
                  >
                    <Select
                      className="h-8 w-full px-2"
                      containerClassName="w-full"
                      name="flightClass"
                      control={control}
                      direction="rtl"
                    >
                      <MenuItem
                        value="economy"
                        sx={{ display: 'flex', justifyContent: 'end' }}
                        onClick={() => setFightClass('اکونومی')}
                      >
                        <p>اکونومی</p>
                      </MenuItem>
                      <MenuItem
                        value="business"
                        sx={{ display: 'flex', justifyContent: 'end' }}
                        onClick={() => setFightClass('بیزنس')}
                      >
                        <p>بیزنس</p>
                      </MenuItem>
                    </Select>
                  </Box>
                ),
                onClick: () => {},
              },
              {
                text: (
                  <Box
                    sx={{ direction: 'rtl' }}
                    className="flex gap-8 justify-between w-full"
                  >
                    <span>بزرگسال</span>
                    <div className="flex gap-3">
                      <MinusCircle
                        color={siteColors.secondary}
                        onClick={() => {
                          if (adultCount > 1) {
                            setAdultCount((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">
                        {convertToPersianNumbers(
                          String(adultCount),
                          false,
                        )}
                      </span>
                      <PlusCircle
                        color={siteColors.secondary}
                        onClick={() => setAdultCount((pre) => pre + 1)}
                      />
                    </div>
                  </Box>
                ),
                onClick: () => {},
              },
              {
                text: (
                  <Box
                    sx={{ direction: 'rtl' }}
                    className="flex gap-8 justify-between w-full"
                  >
                    <span>کودک</span>
                    <div className="flex gap-3">
                      <MinusCircle
                        color={siteColors.secondary}
                        onClick={() => {
                          if (children > 0) {
                            setChildren((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">
                        {convertToPersianNumbers(String(children), false)}
                      </span>
                      <PlusCircle
                        color={siteColors.secondary}
                        onClick={() => setChildren((pre) => pre + 1)}
                      />
                    </div>
                  </Box>
                ),
                onClick: () => {},
              },
              {
                text: (
                  <Box
                    sx={{ direction: 'rtl' }}
                    className="flex gap-8 justify-between w-full"
                  >
                    <span>نوزاد</span>
                    <div className="flex gap-3">
                      <MinusCircle
                        color={siteColors.secondary}
                        onClick={() => {
                          if (infants > 0) {
                            setInfants((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">
                        {convertToPersianNumbers(String(infants), false)}
                      </span>
                      <PlusCircle
                        color={siteColors.secondary}
                        onClick={() => setInfants((pre) => pre + 1)}
                      />
                    </div>
                  </Box>
                ),
                onClick: () => {},
              },
            ]}
          />
          <button
            style={{
              color: setFontColor(siteColors.primary),
              background: siteColors.primary,
            }}
            className="rounded-l-lg px-8"
          >
            <Search />
          </button>
        </div>
      </div>
    </Box>
  );
}
