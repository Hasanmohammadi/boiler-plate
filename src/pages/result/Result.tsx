import clsx from 'clsx';
import Flights from 'pages/home/body/finotix/Flights';
import { useEffect, useState } from 'react';

import FilterBox from './components/Filter';
import PriceFilter from './components/PriceFilter';
import TicketsResult from './components/TicketsResult';
import TopBar from './components/TopBar';

const flightGroups = [
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
  {
    id: '80d29680-099a-4687-9da9-e922d79918cf',
    currencyCode: 'IRR',
    groupId: '3ec86b65-6d0f-4c68-a0d1-74287e52879e',
    groupFares: [
      {
        passengerType: 'ADULT',
        quantity: 1,
        quantityText: '(x1)',
        displayedFare: 60382300,
        displayedTaxAndOther: 32893300,
        displayedFuelAndOther: 0,
        displayedMarkup: 0,
        displayedMarkDown: 0,
        displayedPerPax: 93275600,
        displayedCommision: 0,
        displayedDiscount: 0,
        displayedTotal: 93275600,
      },
    ],
    oneAdultTotalFare: 93275600,
    totalFareAmount: 93275600,
    flights: [
      {
        id: '245141e9-5b00-4348-b3ea-2791905192ea',
        flightId: '63a15657-2112-47b4-bb2d-c4362148b1ed',
        provider: {
          code: 'ITOURS',
          title: 'Itours',
          displayName: 'Itours',
        },
        connectionId: 0,
        canBook: true,
        canReserve: true,
        cabinClass: 'ECONOMY',
        stops: 1,
        totalFlightDuration: 485,
        totalFareAmount: 93275600,
        departureDate: '2023-11-29T03:35:00',
        legs: [
          {
            flightNumberDisplay: 'PC1737',
            departureTime: '2023-11-29T03:35:00',
            arrivalTime: '2023-11-29T05:50:00',
            departureAirport: 'IKA',
            arrivalAirport: 'ESB',
            flightDurationMinutes: 165,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '05:50',
            departureTimeTimeOnly: '03:35',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '2h 45m',
            layoverDurationText: '4h 10m',
            departureAirportName: 'Imam Khomeini Arpt',
            arrivalAirportName: 'Esenboga Arpt',
            departureCityName: 'Tehran',
            departureCountryName: '',
            arrivalCityName: 'Ankara',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 250,
            stopTimeToNextLegText: '4h 10m',
          },
          {
            flightNumberDisplay: 'PC2665',
            departureTime: '2023-11-29T10:00:00',
            arrivalTime: '2023-11-29T11:10:00',
            departureAirport: 'ESB',
            arrivalAirport: 'SAW',
            flightDurationMinutes: 70,
            baggageItems: [
              {
                baggageDetailID: 20,
                passengerType: 'ADULT',
                amount: 20,
                unit: 'K',
                displayText: 'ADULT: 20K, ',
                displayText_Short: '20Kg',
                unitText: 'Kg',
              },
            ],
            airLineLogoUrl:
              'https://cdn.irsa.ir/public/flight/logo/PC.svg',
            arrivalTimeTimeOnly: '11:10',
            departureTimeTimeOnly: '10:00',
            arrivalTimeDateOnly: '29 Nov 2023',
            departureTimeDateOnly: '29 Nov 2023',
            flightDurationText: '1h 10m',
            layoverDurationText: '0h 0m',
            departureAirportName: 'Esenboga Arpt',
            arrivalAirportName: 'Sabiha Gokcen Arpt',
            departureCityName: 'Ankara',
            departureCountryName: '',
            arrivalCityName: 'Istanbul',
            arrivalCountryName: '',
            opratorName: 'Pegasus Airlines',
            marketerName: 'Pegasus Airlines',
            stopTimeToNextLegMinute: 0,
            stopTimeToNextLegText: '0h 0m',
          },
        ],
      },
    ],
  },
];

export default function Results() {
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
