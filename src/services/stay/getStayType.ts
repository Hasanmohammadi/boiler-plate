import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { ApiResponseI, StayTypeListI } from 'types/stay';

const getStayType = async () => {
  const response = await axios.get<ApiResponseI<StayTypeListI>>(
    STAY_URLS.GET_STAY_TYPE,
    {
      headers: {},
      params: {
        skip: 0,
        take: 1000,
        orderBy: 'Id',
        SortType: 'Asc',
      },
    },
  );

  return response.data.result;
};

export default getStayType;
