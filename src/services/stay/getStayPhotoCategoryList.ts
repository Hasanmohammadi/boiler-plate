import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { ApiResponseI } from 'types/stay';
import { StayPhotoCategoriesI } from 'types/stay/stay';

const getStayPhotoCategoryList = async () => {
  const response = await axios.get<ApiResponseI<StayPhotoCategoriesI[]>>(
    STAY_URLS.GET_HOTEL_PHOTO_CATEGORY_LIST,
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

export default getStayPhotoCategoryList;
