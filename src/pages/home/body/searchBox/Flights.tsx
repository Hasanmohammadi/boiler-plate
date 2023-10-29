import { Box } from '@mui/material';
import { AirplaneLanding, Swap } from 'assets/svg';
import AirplaneTakeoff from 'assets/svg/AirplaneTakeoff';
import clsx from 'clsx';
import { Button, Checkbox, DatePicker, Menu, SelectSearch } from 'common';
import { isDepartureDateBigger } from 'helpers';
import defaultDate from 'helpers/defaultDate';
import { useGetPlaces } from 'hooks/airport';
import { useEffect, useState } from 'react';
import { Calendar, MinusSquare, PlusSquare } from 'react-feather';
import { useForm } from 'react-hook-form';

interface SearchBoxFormI {
  departure: {
    id: string;
    label: string;
  };
  arrival: {
    id: string;
    label: string;
  };
  departureDate: {
    year: number;
    month: number;
    day: number;
  };
  arrivalDate: {
    from: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
  };
}

export default function Flights() {
  const [wayType, setWayType] = useState<'Round-trip' | 'One Way'>(
    'One Way',
  );
  const [flightClass, setFightClass] = useState<string>('ECONOMY');
  const [originSearched, setOriginSearched] = useState<string>('');
  const [arrivalSearched, setArrivalSearched] = useState<string>('');
  const [adultCount, setAdultCount] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

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
  const { departureDate, arrivalDate } = watch();

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

  useEffect(() => {
    if (
      isDepartureDateBigger({
        arrivalDate: arrivalDate.from,
        departureDate,
      })
    ) {
      setValue('arrivalDate.from', departureDate);
    }
  }, [departureDate]);

  const onSubmit = (data: SearchBoxFormI) => {
    console.log('🚀 ~ file: Flights.tsx:51 ~ onSubmit ~ data:', data);
  };

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
        className="w-full flex gap-2"
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
        <div className="w-2/5 flex mt-3 gap-4 ">
          <div className="border border-gray-300 rounded-lg text-center gap-2 items-center px-2 flex">
            <Calendar size={18} />
            <div>
              <p className="text-xs">Departure Date</p>
              <DatePicker
                type="RangeDay"
                className="h-5 w-full border-none"
                name="departureDate"
                control={control}
                size="md"
                placeholder="Select date"
                position="auto"
                minimumDate={defaultDate()?.from}
              />
            </div>
          </div>
          <div
            className={clsx(
              'border border-gray-300 rounded-lg text-center gap-2 items-center px-2 flex',
              {
                'opacity-30': wayType === 'One Way',
              },
            )}
          >
            <Calendar size={18} />
            <Box onClick={() => setWayType('Round-trip')}>
              <p className="text-xs">Arrival Date</p>
              <DatePicker
                type="RangeDay"
                className="h-5 w-full border-none"
                name="arrivalDate"
                control={control}
                size="md"
                placeholder="Select date"
                minimumDate={departureDate}
                position="auto"
              />
            </Box>
            <input
              type="checkbox"
              className="w-5 h-5 cursor-pointer accent-yellow-500"
              checked={wayType === 'Round-trip'}
              onChange={(e) => {
                if (e.target.checked) {
                  setWayType('Round-trip');
                } else if (!e.target.checked) {
                  setWayType('One Way');
                }
              }}
            />
          </div>
          <Menu
            className="border border-gray-300 rounded-lg"
            btnClassName="h-[42px]"
            hasArrow={false}
            btnText={
              <>
                <p>{adultCount + children + infants}</p>
                <p className="-mt-2">
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
