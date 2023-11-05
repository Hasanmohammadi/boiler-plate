import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';
import { AddHotelDetailInfoI } from 'types/stay';

const putEditHotelDetail = async ({
  HotelDetailInfo,
}: {
  HotelDetailInfo: AddHotelDetailInfoI;
}) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.PUT_EDIT_HOTEL_DETAIL,
    {
      ...HotelDetailInfo,
    },
    {
      headers: {},
    },
  );

  return response.data;
};

export default putEditHotelDetail;
