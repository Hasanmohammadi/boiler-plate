import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';
import { AddVendorStayNamesI } from 'types/stay';

const putEditStayNames = async ({
  editHotelNames,
  hotelId,
}: AddVendorStayNamesI) => {
  const response = await axios.put<NullResultI>(
    STAY_URLS.PUT_CHANGE_STAY_NAMES,
    {
      editHotelNames: editHotelNames as {
        name: string;
        languageId: string;
      }[],
      hotelId,
    },
    {
      headers: {},
    },
  );

  return response.data;
};

export default putEditStayNames;
