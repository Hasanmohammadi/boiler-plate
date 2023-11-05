import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';

const postAddHotelProperty = async ({
  hotelId,
  hotelPropertyIds,
}: {
  hotelId: string;
  hotelPropertyIds: string[];
}) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.POST_ADD_STAY_PROPERTY,
    {
      hotelId,
      hotelPropertyIds,
    },
    {
      headers: {},
    },
  );

  return response.data;
};

export default postAddHotelProperty;
