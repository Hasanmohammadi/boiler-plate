import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { AddBaseHotelI, ApiResponseI } from 'types/stay';

const postAddBaseHotel = async ({
  StayTypeId,
}: {
  StayTypeId: string;
}) => {
  const response = await axios.post<ApiResponseI<AddBaseHotelI>>(
    STAY_URLS.POST_ADD_BASE_HOTEL,
    {
      StayTypeId,
    },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
    },
  );

  return response.data;
};

export default postAddBaseHotel;
