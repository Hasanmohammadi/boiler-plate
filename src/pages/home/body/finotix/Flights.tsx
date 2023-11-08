import { Box } from '@mui/material';
import { AirplaneLanding, Swap } from 'assets/svg';
import AirplaneTakeoff from 'assets/svg/AirplaneTakeoff';
import clsx from 'clsx';
import { Button, Menu, SelectSearch } from 'common';
import { useAppWebInfoContext } from 'context';
import { todayDate, todayDateObject } from 'helpers';
import defaultDate from 'helpers/defaultDate';
import { useGetPlaces } from 'hooks/airport';
import { useRef, useState } from 'react';
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

export default function Flights({ isInHeader }: FlightsPropsI) {
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
    <div className="w-full">
      <div
        style={{
          transition: isInHeader ? 'height 0.7s' : 'height 0.3s',
        }}
        className={clsx('flex mt-2 h-12 overflow-hidden ', {
          'h-0': isInHeader,
        })}
      >
        <Menu
          btnClassName="w-fit px-0"
          btnText={wayType}
          menuItems={[
            {
              text: 'Round-trip',
              onClick: () => {
                setWayType('Round-trip');
              },
            },
            {
              text: 'One Way',
              onClick: () => {
                setWayType('One Way');
              },
            },
          ]}
        />
        <Menu
          btnClassName="w-fit px-0"
          btnText={flightClass}
          menuItems={[
            {
              text: 'ECONOMY',
              onClick: () => {
                setFightClass('ECONOMY');
              },
            },
            {
              text: 'BUSINESS',
              onClick: () => {
                setFightClass('BUSINESS');
              },
            },
            {
              text: 'FIRSTCLASS',
              onClick: () => {
                setFightClass('FIRSTCLASS');
              },
            },
            {
              text: 'PROMO',
              onClick: () => {
                setFightClass('PROMO');
              },
            },
          ]}
        />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex justify-between gap-2"
      >
        <div className="flex w-1/2 justify-between mt-3 border border-gray-300 rounded-lg">
          <SelectSearch
            loading={originLoading}
            hasBorder={false}
            className="w-1/2 "
            control={control}
            name="departure"
            setTextSearched={setOriginSearched}
            textSearched={originSearched}
            placeholder="Departing from?"
            icon={<AirplaneTakeoff />}
            items={originPlaces?.map(({ iataCode, isCity, title }) => ({
              id: iataCode,
              label: title,
              isCity,
            }))}
            initialValue={[{ id: '', label: '', isCity: false }]}
          />
          <div className="mt-2 cursor-pointer">
            <Swap />
          </div>
          <SelectSearch
            loading={destinationLoading}
            hasBorder={false}
            className="w-1/2 "
            control={control}
            name="arrival"
            setTextSearched={setArrivalSearched}
            textSearched={arrivalSearched}
            placeholder="Going to?"
            icon={<AirplaneLanding />}
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
        <div className="flex mt-3 gap-2">
          <div className="flex gap-2">
            <div className="flex border border-gray-300 bg-white h-11 rounded-lg">
              <div className="self-center px-2">
                <Calendar />
              </div>
              <div className="w-full inline-grid self-center">
                <p className="text-justify text-sm w-28">Departure Date</p>
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
            <div className=" h-11  rounded-lg relative">
              <input
                className="absolute right-2 top-6 w-4 h-4 cursor-pointer"
                type="checkbox"
                checked={wayType === 'Round-trip'}
                onChange={(e) => {
                  if (e.target.checked) {
                    setWayType('Round-trip');
                  } else {
                    setWayType('One Way');
                  }
                }}
              />

              <div
                className={clsx(
                  'flex w-40 h-11 border border-gray-300 rounded-lg bg-white ',
                  {
                    'text-gray-300 cursor-pointer': wayType === 'One Way',
                  },
                )}
              >
                <div className="self-center px-2">
                  <Calendar />
                </div>
                <div className="w-full inline-grid self-center">
                  <div
                    className="text-justify text-sm"
                    onClick={() => {
                      datePickerRef?.current?.openCalendar();
                    }}
                    role="presentation"
                  >
                    Return Date
                  </div>

                  {wayType === 'One Way' ? (
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
          </div>
          <Menu
            className="border border-gray-300 rounded-lg"
            btnClassName="h-[42px]"
            hasArrow={false}
            btnText={
              <>
                <p>{adultCount + children + infants}</p>
                <p className=" text-xs">
                  {adultCount + children + infants > 1
                    ? 'Passengers'
                    : 'Passenger'}
                </p>
              </>
            }
            menuItems={[
              {
                text: (
                  <div className="flex gap-8 justify-between w-full">
                    <span>Adult</span>
                    <div className="flex gap-3">
                      <MinusSquare
                        color={siteColors.secondary}
                        onClick={() => {
                          if (adultCount > 1) {
                            setAdultCount((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">{adultCount}</span>
                      <PlusSquare
                        color={siteColors.secondary}
                        onClick={() => setAdultCount((pre) => pre + 1)}
                      />
                    </div>
                  </div>
                ),
                onClick: () => {},
              },
              {
                text: (
                  <div className="flex gap-8 justify-between w-full">
                    <span>Children</span>
                    <div className="flex gap-3">
                      <MinusSquare
                        color={siteColors.secondary}
                        onClick={() => {
                          if (children > 0) {
                            setChildren((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">{children}</span>
                      <PlusSquare
                        color={siteColors.secondary}
                        onClick={() => setChildren((pre) => pre + 1)}
                      />
                    </div>
                  </div>
                ),
                onClick: () => {},
              },
              {
                text: (
                  <div className="flex gap-8 justify-between w-full">
                    <span>Infants</span>
                    <div className="flex gap-3">
                      <MinusSquare
                        color={siteColors.secondary}
                        onClick={() => {
                          if (infants > 0) {
                            setInfants((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">{infants}</span>
                      <PlusSquare
                        color={siteColors.secondary}
                        onClick={() => setInfants((pre) => pre + 1)}
                      />
                    </div>
                  </div>
                ),
                onClick: () => {},
              },
            ]}
          />
          <Button
            containerClassName="w-1/2"
            className="w-full"
            type="submit"
            primaryColor={siteColors.primary}
            secondaryColor={siteColors.secondary}
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
