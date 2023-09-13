import { AirplaneLanding, Swap } from 'assets/svg';
import AirplaneTakeoff from 'assets/svg/AirplaneTakeoff';
import { Button, DatePicker, Menu, SelectSearch } from 'common';
import defaultDate from 'helpers/defaultDate';
import { useState } from 'react';
import {
  Airplay,
  ArrowLeft,
  ArrowRight,
  MinusSquare,
  PlusSquare,
} from 'react-feather';
import { useForm } from 'react-hook-form';

export default function Flights() {
  const [wayType, setWayType] = useState<'Round-trip' | 'One Way'>(
    'One Way',
  );
  const [flightClass, setFightClass] = useState<string>('ECONOMY');
  const [textSearched, setTextSearched] = useState<string>('');
  const [adultCount, setAdultCount] = useState<number>(1);
  const [children, setChildren] = useState<number>(0);
  const [infants, setInfants] = useState<number>(0);

  const { control } = useForm({
    defaultValues: {
      departure: { id: '', label: '' },
      arrival: { id: '', label: '' },
      departureDate: defaultDate().from,
      arrivalDate: defaultDate().from,
    },
  });

  return (
    <div className="w-full">
      <div className="flex mt-2">
        <Menu
          className="w-36"
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
          className="w-36"
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
        <Menu
          btnText={`${`Adult ${adultCount} ${
            children ? `- Children ${children}` : ''
          } ${infants ? `- Infants ${infants}` : ''}`}`}
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
              onClick: () => {
                setWayType('Round-trip');
              },
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
              onClick: () => {
                setWayType('Round-trip');
              },
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
              onClick: () => {
                setWayType('Round-trip');
              },
            },
          ]}
        />
      </div>
      <div className="w-full flex gap-4">
        <div className="flex w-3/5 justify-between gap-4 mt-3 pl-4">
          <SelectSearch
            className="w-1/2 "
            control={control}
            name="departure"
            setTextSearched={setTextSearched}
            textSearched={textSearched}
            placeholder="Departing from?"
            icon={<AirplaneTakeoff />}
          />
          <div className="mt-1.5">
            <Swap />
          </div>
          <SelectSearch
            className="w-1/2 "
            control={control}
            name="arrival"
            setTextSearched={setTextSearched}
            textSearched={textSearched}
            placeholder="Going to?"
            icon={<AirplaneLanding />}
          />
        </div>
        <div className="w-2/5 flex mt-3 gap-4 ">
          <DatePicker
            type="RangeDay"
            className="h-11 w-full"
            name="departureDate"
            control={control}
            size="md"
            placeholder="Select date"
            minimumDate={defaultDate()?.from}
          />
          {wayType === 'Round-trip' && (
            <DatePicker
              type="RangeDay"
              className="h-11 w-full"
              name="arrivalDate"
              control={control}
              size="md"
              placeholder="Select date"
              minimumDate={defaultDate()?.from}
            />
          )}
          <Button containerClassName="w-1/2" className="w-full">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
