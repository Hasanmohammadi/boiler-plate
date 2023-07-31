import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { NullResultI } from 'types/common';
import { AddHotelDetailInfoI } from 'types/stay';

const postAddHotelDetail = async ({
  HotelDetailInfo,
}: {
  HotelDetailInfo: AddHotelDetailInfoI;
}) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.POST_ADD_HOTEL_DETAIL,
    {
      ...HotelDetailInfo,
    },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
    },
  );

  return response.data;
};

export default postAddHotelDetail;
