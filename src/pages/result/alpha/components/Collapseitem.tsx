import { SuitcaseOutline } from 'assets/svg';
import { FrontDataFlightsI, GroupFareI } from 'types/search';

interface TicketResultPropsI {
  departureFlight: FrontDataFlightsI;
  returnFlight: FrontDataFlightsI;
  groupFares: GroupFareI[];
  totalFareAmount: number;
  onBook: () => void;
  oneAdultTotalFare: number;
}

export default function Collapseitem({
  departureFlight,
  groupFares,
  onBook,
  oneAdultTotalFare,
  returnFlight,
  totalFareAmount,
}: TicketResultPropsI) {
  return (
    <div className="px-6 py-4" style={{ direction: 'rtl' }}>
      <p className="text-base font-semibold text-gray-400">پرواز رفت</p>
      <div>
        {departureFlight?.legs.map((leg) => (
          <>
            <div className="">
              <div className="w-full flex justify-between">
                <div className="w-full">
                  <div className="flex gap-2">
                    <img
                      src={leg.airLineLogoUrl}
                      width={40}
                      height={35}
                      className="mr-2"
                      alt="air line logo"
                    />
                    <div className="flex gap-4 items-center">
                      <p className="text-gray-400 font-medium text-sm w-28">
                        {leg?.marketerName}
                      </p>
                      <span className="text-gray-400">|</span>
                      <p className="text-gray-400 font-normal text-xs my-0.5">
                        {leg?.flightNumberDisplay}
                      </p>
                      <span className="text-gray-400">|</span>
                      <p className="text-gray-400 font-normal text-sm">
                        {departureFlight?.cabinClass}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-xs pr-14 text-gray-400">
                    Operated by {leg.opratorName}
                  </p>
                </div>
                <div className="flex">
                  <div>
                    <p className="">
                      {departureFlight?.legs?.[0]?.arrivalTimeDateOnly} -
                    </p>
                  </div>
                  <div className="font-normal text-sm text-gray-400 flex mt-0.5">
                    <span>{leg?.departureCityName}</span>
                    <span>({leg?.departureAirport})</span>
                  </div>
                </div>
              </div>
              <div className="text-center w-1/4">
                <p className="font-semibold text-base">
                  {leg?.departureTimeTimeOnly}
                </p>
                <p>
                  <span className="font-semibold text-xs">
                    {leg?.departureAirport} ,
                  </span>
                  <span className="font-normal text-xs">
                    {leg?.departureAirportName}
                  </span>
                </p>
                <p className="font-normal text-sm text-gray-400">
                  {leg?.departureCityName}
                </p>
              </div>
              <p className="self-center font-normal text-center w-1/4">
                {leg?.flightDurationText}
              </p>
              <div className="text-center w-1/4">
                <p className="font-semibold text-base">
                  {leg?.arrivalTimeTimeOnly}
                </p>
                <p>
                  <span className="font-semibold text-xs">
                    {leg?.arrivalAirport} ,
                  </span>
                  <span className="font-normal text-xs">
                    {leg?.arrivalAirportName}
                  </span>
                </p>
                <p className="font-normal text-sm text-gray-400">
                  {leg?.arrivalCityName}
                </p>
              </div>
              <div className="self-center flex items-center gap-1 w-1/4 justify-end">
                <SuitcaseOutline />
                <div>
                  <p className="font-normal text-xs text-gray-600">
                    Baggage:
                  </p>
                  <p className="font-normal text-xs text-gray-600">
                    {' '}
                    {leg?.baggageItems?.[0].displayText_Short}
                  </p>
                </div>
              </div>
            </div>
            {!!leg?.stopTimeToNextLegMinute && (
              <div className=" py-1 my-2 border-t border-t-gray-400 text-center ml-14 w-28  border-b border-b-gray-400 bg-gray-100  rounded-md ">
                <p className="font-medium text-xs">
                  Stop: {leg?.stopTimeToNextLegText}
                </p>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
