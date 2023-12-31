import {
  FrontDataSearchResultI,
  GetSearchResultResultI,
} from '../../types/search';

const convertApiToFrontData = (
  apiData: GetSearchResultResultI,
): FrontDataSearchResultI => ({
  total: apiData?.totalCounntAfterFilter,
  searchID: apiData?.searchResult?.searchID,
  searchType: apiData?.searchResult?.searchType,
  travelerAvailAdultCount: apiData?.searchResult?.travelerAvailAdultCount,
  travelerAvailChildCount: apiData?.searchResult?.travelerAvailChildCount,
  travelerAvailInfantCount:
    apiData?.searchResult?.travelerAvailInfantCount,
  flightGroups: apiData?.searchResult?.flightGroups?.map(
    (flightGroup) => ({
      id: flightGroup?.id,
      currencyCode: apiData?.searchResult?.currencyCode,
      groupId: flightGroup?.groupId,
      groupFares: flightGroup?.groupFares,
      oneAdultTotalFare: flightGroup?.oneAdultTotalFare,
      totalFareAmount: flightGroup?.totalFareAmount,
      flights: flightGroup?.flights?.map((flight) => ({
        id: flight?.id,
        flightId: flight?.flightID,
        provider: {
          code: flight?.providerCode,
          title: flight?.providerTitle,
          displayName: flight?.providerDisplayName,
        },
        connectionId: flight?.connectionID,
        canBook: flight?.canBook,
        canReserve: flight?.canReserve,
        cabinClass: flight?.cabinClass,
        stops: flight?.stops,
        totalFlightDuration: flight?.totalFlightDuration,
        totalFareAmount: flight?.totalFareAmount,
        departureDate: flight?.departureDate,
        legs: flight?.legs?.map((leg) => ({
          flightNumberDisplay: leg?.flightNumber_Display,
          departureTime: leg?.departureTime,
          arrivalTime: leg?.arrivalTime,
          departureAirport: leg?.departureAirport,
          arrivalAirport: leg?.arrivalAirport,
          flightDurationMinutes: leg?.flightDurationMinutes,
          baggageItems: leg?.baggageItems,
          airLineLogoUrl: leg?.airLineLogoUrl,
          arrivalTimeTimeOnly: leg?.arrivalTime_TimeOnly,
          departureTimeTimeOnly: leg?.departureTime_TimeOnly,
          arrivalTimeDateOnly: leg?.arrivalTime_DateOnly,
          departureTimeDateOnly: leg?.departureTime_DateOnly,
          flightDurationText: leg?.flightDurationText,
          layoverDurationText: leg?.layoverDurationText,
          departureAirportName: leg?.departureAirportName,
          arrivalAirportName: leg?.arrivalAirportName,
          departureCityName: leg?.departureCityName,
          departureCountryName: leg?.departureCountryName,
          arrivalCityName: leg?.arrivalCityName,
          arrivalCountryName: leg?.arrivalCountryName,
          opratorName: leg?.opratorName,
          marketerName: leg?.marketerName,
          stopTimeToNextLegMinute: leg?.stopTimeToNextLegMinute,
          stopTimeToNextLegText: leg?.stopTimeToNextLegText,
        })),
      })),
    }),
  ),
});

export default convertApiToFrontData;
