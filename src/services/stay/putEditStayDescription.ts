import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { NullResultI } from 'types/common';
import { AddVendorDescriptionI } from 'types/stay/stay';

const putEditStayDescription = async ({
  hotelDescriptionsDetailes,
  hotelId,
}: AddVendorDescriptionI) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.PUT_CHANGE_STAY_DESCRIPTION,
    {
      hotelDescriptionsDetailes: hotelDescriptionsDetailes as {
        shortDescription: string;
        longDescription: string;
        languageId: string;
      }[],
      hotelId,
    },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
    },
  );

  return response.data;
};

export default putEditStayDescription;
