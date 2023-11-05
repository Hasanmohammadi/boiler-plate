import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';

interface PostAddStayNameI {
  hotelId: string;
  hotelNames: [
    {
      name: string;
      languageId: string;
    },
  ];
}
const postAddStayName = async ({
  hotelId,
  hotelNames,
}: PostAddStayNameI) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.POST_ADD_STAY_NAME,
    {
      hotelId,
      hotelNames,
    },
    {
      headers: {},
    },
  );

  return response.data;
};

export default postAddStayName;
