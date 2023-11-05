import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { ApiResponseI, StayInformationResultI } from 'types/stay';

interface HotelPropertyListI {
  hotelId: string;
  VendorId: string;
}

const getStayInformation = async ({
  hotelId,
  VendorId,
}: HotelPropertyListI) => {
  const response = await axios.get<ApiResponseI<StayInformationResultI>>(
    STAY_URLS.GET_STAY_INFORMATION,
    {
      headers: {},
      params: {
        id: hotelId,
        VendorId,
      },
    },
  );

  return response.data.result;
};

export default getStayInformation;
