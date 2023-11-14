import { Box } from '@mui/material';
import { SuitcaseOutline } from 'assets/svg';
import { useAppWebInfoContext } from 'context';
import { convertToPersianNumbers } from 'helpers';
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
  const { siteColors } = useAppWebInfoContext();
  return (
    <div className="px-6 py-4" style={{ direction: 'rtl' }}>
      <p className="text-base font-semibold text-gray-400">پرواز رفت</p>
      <div>
        {departureFlight?.legs.map((leg) => (
          <>
            <div>
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
                <div>
                  <div className="flex">
                    <div className="flex">
                      <p className="font-semibold text-base">
                        {convertToPersianNumbers(
                          leg?.departureTimeTimeOnly,
                        )}
                      </p>
                      <span className="px-1">-</span>
                    </div>
                    <div>
                      <p className="w-28">
                        {departureFlight?.legs?.[0]?.arrivalTimeDateOnly} -
                      </p>
                    </div>
                    <div className="font-normal  flex mt-0.5">
                      <span>{leg?.departureCityName}</span>
                      <span>({leg?.departureAirport})</span>
                    </div>
                  </div>
                  <p className="font-normal text-xs text-end mt-1 text-gray-400">
                    {leg?.departureAirportName}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-between mt-6">
                <div className="w-full ">
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-gray-500">کلاس نرخی </p>
                      <p>N/A</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">شماره پرواز</p>
                      <p>{leg?.flightNumberDisplay}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">مقدار بار مجاز</p>
                      <p>{leg?.baggageItems?.[0].displayText_Short}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">نوع هواپیما</p>
                      <p>N/A</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <div className="flex">
                      <p className="font-semibold text-base">
                        {convertToPersianNumbers(leg?.arrivalTimeTimeOnly)}
                      </p>
                      <span className="px-1">-</span>
                    </div>
                    <div>
                      <p className="w-28">
                        {departureFlight?.legs?.[0]?.arrivalTimeDateOnly} -
                      </p>
                    </div>
                    <div className="font-normal  flex mt-0.5">
                      <span>{leg?.arrivalCityName}</span>
                      <span>({leg?.arrivalAirport})</span>
                    </div>
                  </div>
                  <p className="font-normal text-xs text-end mt-1 text-gray-400">
                    {leg?.arrivalAirportName}
                  </p>
                </div>
              </div>
            </div>
            {!!leg?.stopTimeToNextLegMinute && (
              <div className="w-full flex justify-end">
                <div className=" py-1 my-2 px-3 items-center flex justify-end gap-2 w-56 bg-gray-300  rounded-full">
                  <p className="font-medium text-red-600">
                    مدت زمان توقف :{' '}
                    {convertToPersianNumbers(leg?.stopTimeToNextLegText)}
                  </p>
                  <Box
                    sx={{
                      borderRadius: '100px',
                      width: '14px',
                      height: '14px',
                      backgroundColor: siteColors.primary,
                    }}
                  >
                    {' '}
                  </Box>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
