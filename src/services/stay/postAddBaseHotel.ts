import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
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
      headers: {},
    },
  );

  return response.data;
};

export default postAddBaseHotel;
