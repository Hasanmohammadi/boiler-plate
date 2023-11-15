import clsx from 'clsx';
import AlphaSearchBox from 'pages/home/body/alpha';

import { flightGroups } from '../Result';
import AlphaFilters from './components/AlphaFilters';
import AlphaTopBar from './components/AlphaTopBar';
import TicketCard from './components/TicketCard';

export default function AlphaResult() {
  return (
    <>
      <div className="absolute w-full">
        <div
          className={clsx(
            'flex flex-col justify-center w-full m-auto pt-0 bg-white top-0 left-0 right-0 sticky z-10 shadow-xl',
          )}
        >
          <AlphaSearchBox isInHeader />
        </div>
        <div className="w-4/5 flex m-auto gap-4 pt-4">
          <div className="bg-gray-100 pb-10 w-4/5">
            <div className="">
              <AlphaTopBar />
              {flightGroups.map((flightGroup) => (
                <TicketCard
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
              ))}
            </div>
          </div>

          <AlphaFilters />
        </div>
      </div>
    </>
  );
}
