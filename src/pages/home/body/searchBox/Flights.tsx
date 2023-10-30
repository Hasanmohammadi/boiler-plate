import { Box } from '@mui/material';
import { AirplaneLanding, Swap } from 'assets/svg';
import AirplaneTakeoff from 'assets/svg/AirplaneTakeoff';
import clsx from 'clsx';
import { Button, Checkbox, Menu, SelectSearch } from 'common';
import {
  isDepartureDateBigger,
  todayDate,
  todayDateObject,
} from 'helpers';
import defaultDate from 'helpers/defaultDate';
import { useGetPlaces } from 'hooks/airport';
import { useEffect, useRef, useState } from 'react';
import { Calendar, MinusSquare, PlusSquare } from 'react-feather';
import { useForm } from 'react-hook-form';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Toolbar from 'react-multi-date-picker/plugins/toolbar';

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

export default function Flights() {
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

  const { getPlacesData: originPlaces } = useGetPlaces({
    count: 10,
    name: originSearched,
    queryKey: 'originPlaces',
  });

  const { getPlacesData: destinationPlaces } = useGetPlaces({
    count: 10,
    name: arrivalSearched,
    queryKey: 'destinationPlaces',
  });

  // useEffect(() => {
  //   if (
  //     isDepartureDateBigger({
  //       arrivalDate: arrivalDate.from,
  //       departureDate,
  //     })
  //   ) {
  //     setValue('arrivalDate.from', departureDate);
  //   }
  // }, [departureDate]);

  const onSubmit = (data: SearchBoxFormI) => {
    console.log('🚀 ~ file: Flights.tsx:51 ~ onSubmit ~ data:', data);
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
      <div className="flex mt-2">
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
                        color="#ffcc00"
                        onClick={() => {
                          if (adultCount > 1) {
                            setAdultCount((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">{adultCount}</span>
                      <PlusSquare
                        color="#ffcc00"
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
                        color="#ffcc00"
                        onClick={() => {
                          if (children > 0) {
                            setChildren((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">{children}</span>
                      <PlusSquare
                        color="#ffcc00"
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
                        color="#ffcc00"
                        onClick={() => {
                          if (infants > 0) {
                            setInfants((pre) => pre - 1);
                          }
                        }}
                      />
                      <span className="w-4 text-center">{infants}</span>
                      <PlusSquare
                        color="#ffcc00"
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
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}
