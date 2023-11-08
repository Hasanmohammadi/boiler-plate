import { Box } from '@mui/material';
import { AirplaneLanding, AlphaSwap, Swap } from 'assets/svg';
import AirplaneTakeoff from 'assets/svg/AirplaneTakeoff';
import clsx from 'clsx';
import { Button, Menu, RadioButton, SelectSearch } from 'common';
import { useAppWebInfoContext } from 'context';
import { todayDate, todayDateObject } from 'helpers';
import defaultDate from 'helpers/defaultDate';
import { useGetPlaces } from 'hooks/airport';
import { useRef, useState } from 'react';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { Calendar, MinusSquare, PlusSquare } from 'react-feather';
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
  const [flightClass, setFightClass] = useState<string>('ECONOMY');
  const [departureDateInput, setDepartureDateInput] = useState<DateI>(
    todayDateObject(),
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
    setDepartureDateInput({
      day,
      month: month?.number,
      year,
    });
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
    <Box sx={{ direction: 'rtl' }}>
      <div>
        <RadioButton
          sx={{ display: 'flex', flexDirection: 'row', gap: '18px' }}
          radios={[
            { radioText: 'یک طرفه', value: 'one-way', className: 'w-24' },
            {
              radioText: 'دو طرفه',
              value: 'round-trip',
              className: 'w-24',
            },
          ]}
        />
      </div>
      <div className="flex">
        <div className="flex w-2/5 justify-between mt-3 border flex-row border-gray-300 rounded-lg rounded-l-none">
          <SelectSearch
            direction="rtl"
            loading={originLoading}
            hasBorder={false}
            className="w-1/2 "
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
        <div className="border border-gray-300 h-12 mt-3 border-r-0 pr-2 w-32">
          <p className="text-center">تاریخ رفت</p>
          <div className="flex gap-1">
            <Calendar color="#A2A2A2" className="w-10 h-10 -mt-2" />
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
                minDate={todayDate()}
                value={
                  new Date(
                    departureDateInput.year,
                    departureDateInput.month - 1,
                    departureDateInput.day,
                  )
                }
                onChange={(date) =>
                  handleDepartureDate(date as DateObject)
                }
                numberOfMonths={1}
                inputMode="text"
                range={false}
                placeholder="dateHitPoint"
                className="cursor-pointer"
              />
            </Box>
          </div>
        </div>
        <div className="border border-gray-300 h-12 mt-3 border-r-0 pr-2 w-32">
          <p className="text-center">تاریخ برگشت</p>
          <div className="flex gap-2">
            <Calendar color="#A2A2A2" size={17} className="mt-[3px]" />
            {wayType !== 'One Way' ? (
              <p className="">
                {returnDateInput.day
                  ? `${returnDateInput.year}/${returnDateInput.month}/${returnDateInput.day}`
                  : `${departureDateInput.year}/${departureDateInput.month}/${departureDateInput.day}`}
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
                  minDate={`${departureDateInput.year}-${departureDateInput.month}-${departureDateInput.day}`}
                  ref={datePickerRef}
                  render={() => (
                    <Box
                      className="cursor-pointer text-start"
                      onClick={() =>
                        datePickerRef?.current?.openCalendar()
                      }
                    >
                      {returnDateInput.day
                        ? `${returnDateInput.year}/${returnDateInput.month}/${returnDateInput.day}`
                        : `${departureDateInput.year}/${departureDateInput.month}/${departureDateInput.day}`}{' '}
                    </Box>
                  )}
                  value={[
                    new Date(
                      departureDateInput.year,
                      departureDateInput.month - 1,
                      departureDateInput.day,
                    ),
                    new Date(
                      returnDateInput.year,
                      returnDateInput.month - 1,
                      returnDateInput.day,
                    ),
                  ]}
                  onChange={(date) =>
                    handleReturnDate(date as DateObject[])
                  }
                  numberOfMonths={1}
                  inputMode="text"
                  range
                  placeholder="dateHitPoint"
                />
              </Box>
            )}
          </div>
        </div>
      </div>
    </Box>
  );
}
