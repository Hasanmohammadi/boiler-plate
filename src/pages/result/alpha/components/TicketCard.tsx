import { Box, Typography } from '@mui/material';
import { AirplaneIcon, LongArrow } from 'assets/svg';
import { useAppWebInfoContext } from 'context';
import {
  convertSecondToMinute,
  convertToPersianNumbers,
  setFontColor,
} from 'helpers';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import { FrontDataFlightsI, GroupFareI } from 'types/search';

import Collapseitem from './Collapseitem';

interface TicketCardPropsI {
  departureFlight: FrontDataFlightsI;
  returnFlight: FrontDataFlightsI;
  groupFares: GroupFareI[];
  groupId: string;
  id: string;
  oneAdultTotalFare: number;
  totalFareAmount: number;
  currencyCode: string;
  passengersCount: {
    adult: number;
    child: number;
    infant: number;
  };
}

export default function TicketCard({
  currencyCode,
  departureFlight,
  groupFares,
  groupId,
  id,
  oneAdultTotalFare,
  passengersCount,
  returnFlight,
  totalFareAmount,
}: TicketCardPropsI) {
  const { siteColors } = useAppWebInfoContext();

  const [collapseHeight, setCollapseHeight] = useState('0px');

  const onBook = () => {};

  return (
    <div className="my-4 ">
      <div
        className=" px-10 flex bg-white rounded-lg h-32"
        style={{ direction: 'rtl' }}
      >
        <div className="w-1/4 h-full flex flex-col  place-content-center">
          <div>
            <img
              src={departureFlight?.legs?.[0]?.airLineLogoUrl}
              alt="airline logo"
              width={50}
              height={40}
            />
            <p className="text-[#808080] font-normal text-sm w-32">
              {departureFlight?.legs?.[0]?.marketerName}
            </p>
          </div>
        </div>

        <div className="w-2/4 h-full flex flex-col items-center">
          <div className="flex gap-5 mt-10">
            <div>
              <div className="flex gap-1">
                <p className="text-base font-normal text-gray-400">
                  {departureFlight?.legs?.[0]?.departureCityName}
                </p>
                <p className="text-base font-normal text-gray-400">
                  ({departureFlight?.legs?.[0]?.departureAirport})
                </p>
              </div>
              <div className="text-center mt-1">
                <p className="text-lg font-semibold text-gray-600">
                  {convertToPersianNumbers(
                    departureFlight?.legs?.[0]?.departureTimeTimeOnly,
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="flex">
                <AirplaneIcon
                  className="rotate-180"
                  color={siteColors.primary}
                  height="21"
                  width="23"
                />
                <LongArrow className="mt-1.5" />
              </div>
              <div className="flex gap-2 text-gray-600 justify-center">
                <p className="text-gray-400">زمان سفر</p>
                <p>
                  {convertToPersianNumbers(
                    convertSecondToMinute(
                      departureFlight?.totalFlightDuration,
                      false,
                    ),
                  )}
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-1">
                <p className="text-base font-normal text-gray-400">
                  {
                    departureFlight?.legs[departureFlight?.legs.length - 1]
                      .arrivalCityName
                  }
                </p>
                <p className="text-base font-normal text-gray-400">
                  (
                  {
                    departureFlight?.legs[departureFlight?.legs.length - 1]
                      .arrivalAirport
                  }
                  )
                </p>
              </div>
              <div className="text-center mt-1">
                <p className="text-lg font-semibold text-gray-600">
                  {convertToPersianNumbers(
                    departureFlight?.legs[departureFlight?.legs.length - 1]
                      .arrivalTimeTimeOnly,
                  )}
                </p>
              </div>
            </div>
          </div>
          <div> </div>
        </div>
        <div className="w-1/4  h-full border-r-2 border-r-[#DDD] border-dashed flex justify-evenly">
          <div className="flex flex-col justify-around items-center h-full">
            <div className="flex gap-2">
              <p className="font-bold text-lg">
                {totalFareAmount.toLocaleString()}
              </p>
              <p className="mt-0.5 font-bold">ریال</p>
            </div>
            <Box
              sx={{
                backgroundColor: siteColors.primary,
                borderRadius: '17px',
                width: '115px',
                color: setFontColor(siteColors.primary),
                height: '32px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <p className="pt-1 font-bold ">انتخاب پرواز</p>
            </Box>
            <div>
              <Typography
                sx={{
                  color: siteColors.primary,
                  borderBottom: '1px solid',
                  cursor: 'pointer',
                }}
              >
                جزییات قیمت
              </Typography>
            </div>
          </div>
          <div className="h-full flex items-center">
            {collapseHeight === '0px' && (
              <ChevronDown
                className="cursor-pointer"
                color={siteColors.primary}
                onClick={() => setCollapseHeight('200px')}
              />
            )}
            {collapseHeight !== '0px' && (
              <ChevronUp
                className="cursor-pointer"
                color={siteColors.primary}
                onClick={() => setCollapseHeight('0px')}
              />
            )}
          </div>
        </div>
      </div>
      <Box
        sx={{
          height: collapseHeight,
          backgroundColor: 'white',
          borderRadius: '12px',
          borderTop: '2px dashed #DDD',
          overflow: 'hidden',
          transition: 'height 0.4s',
        }}
      >
        <Collapseitem
          departureFlight={departureFlight}
          returnFlight={returnFlight}
          groupFares={groupFares}
          oneAdultTotalFare={oneAdultTotalFare}
          totalFareAmount={totalFareAmount}
          onBook={onBook}
        />
      </Box>
    </div>
  );
}
