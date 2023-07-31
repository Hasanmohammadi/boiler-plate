import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { ApiResponseI, StayCategoryResult } from 'types/stay';

const getStayCategoryList = async () => {
  const response = await axios.get<ApiResponseI<StayCategoryResult>>(
    STAY_URLS.GET_HOTEL_PROPERTY_CATEGORY,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
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
