import clsx from 'clsx';
import Flights from 'pages/home/body/finotix/Flights';
import { useEffect, useState } from 'react';

import { flightGroups } from '../Result';
import FilterBox from './components/Filter';
import PriceFilter from './components/PriceFilter';
import TicketsResult from './components/TicketsResult';
import TopBar from './components/TopBar';

export default function FinotixResult() {
  const [small, setSmall] = useState(false);

  const filterOptions = [
    { label: 'Non-stop', value: 'non-stop' },
    { label: 'One Stop', value: 'one-stop' },
    { label: 'Two Stops', value: 'two-stops' },
  ];
  const airLineOptions = [
    { label: 'Pegasus', value: 'pegasus' },
    { label: 'Air France', value: 'airFrance' },
    { label: 'Air Serbia', value: 'airSerbia' },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 20),
      );
    }
  }, []);

  return (
    <>
      <div className="absolute w-full ">
        <div
          className={clsx(
            'flex flex-col justify-center w-full px-40 m-auto pt-0 bg-white top-0 left-0 right-0 p-6 sticky z-10',
            { 'py-1 shadow-xl': small },
          )}
        >
          <Flights isInHeader={small} />
        </div>
        <div className="bg-gray-100 pb-10  w-full">
          <div className="flex w-4/5 m-auto pt-8 gap-7">
            <div className="w-1/5 sticky top-0">
              <div className="bg-white pb-8 rounded-lg">
                <div className="border-b-2 py-3.5 border-b-gray-300 px-5">
                  <p>
                    Filter by{' '}
                    <span className="font-bold text-base">Price</span>
                  </p>
                </div>
                <div className="px-6 pt-4 rounded-lg">
                  <PriceFilter currency="$" />
                </div>
              </div>
              <div className="bg-white pb-8 rounded-lg mt-3">
                <div className="border-b-2 py-3.5 border-b-gray-300 px-5">
                  <p>
                    Filter by{' '}
                    <span className="font-bold text-base">Stop</span>
                  </p>
                </div>
                <div className="px-6 pt-4 rounded-lg">
                  <FilterBox
                    options={filterOptions}
                    // onFilterChange={handleFilterChange}
                    filterName="stops"
                  />
                </div>
              </div>
              <div className="bg-white pb-8 rounded-lg mt-3">
                <div className="border-b-2 py-3.5 border-b-gray-300 px-5">
                  <p>
                    Filter by{' '}
                    <span className="font-bold text-base">Airline</span>
                  </p>
                </div>
                <div className="px-6 pt-4 rounded-lg">
                  <FilterBox
                    options={airLineOptions}
                    // onFilterChange={handleFilterChange}
                    filterName="airline"
                  />
                </div>
              </div>
            </div>

            <div className="w-4/5">
              <TopBar />
              {flightGroups?.map((flightGroup) => (
                <>
                  <TicketsResult
                    departureFlight={flightGroup?.flights?.[0]}
                    currencyCode={flightGroup?.currencyCode}
                    returnFlight={flightGroup?.flights?.[1]}
                    groupFares={flightGroup?.groupFares}
                    groupId={flightGroup?.groupId}
                    id={flightGroup?.id}
                    passengersCount={{
                      adult: 1,
                      child: 0,
                      infant: 0,
                    }}
                    oneAdultTotalFare={flightGroup?.oneAdultTotalFare}
                    totalFareAmount={flightGroup?.totalFareAmount}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
