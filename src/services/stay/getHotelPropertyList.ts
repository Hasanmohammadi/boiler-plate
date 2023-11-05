import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { ApiResponseI, StayPropertyResult } from 'types/stay';

const getHotelPropertyList = async () => {
  const response = await axios.get<ApiResponseI<StayPropertyResult>>(
    STAY_URLS.GET_HOTEL_PROPERTY_LIST,
    {
      headers: {},
      params: {
        skip: 0,
        take: 1000,
        orderBy: 'id',
        SortType: 'Asc',
      },
    },
  );

  return response.data.result;
};

export default getHotelPropertyList;
