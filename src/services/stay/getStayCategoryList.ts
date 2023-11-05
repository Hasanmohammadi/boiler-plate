import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { ApiResponseI, StayCategoryResult } from 'types/stay';

const getStayCategoryList = async () => {
  const response = await axios.get<ApiResponseI<StayCategoryResult>>(
    STAY_URLS.GET_HOTEL_PROPERTY_CATEGORY,
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

export default getStayCategoryList;
