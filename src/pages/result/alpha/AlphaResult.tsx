import clsx from 'clsx';
import AlphaSearchBox from 'pages/home/body/alpha';

import { flightGroups } from '../Result';
import TicketCard from './components/TicketCard';

export default function AlphaResult() {
  return (
    <div className="absolute w-full ">
      <div
        className={clsx(
          'flex flex-col justify-center w-full m-auto pt-0 bg-white top-0 left-0 right-0 sticky z-10 shadow-xl',
        )}
      >
        <AlphaSearchBox isInHeader />
      </div>
      <div className="w-4/5 m-auto">
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
  );
}
