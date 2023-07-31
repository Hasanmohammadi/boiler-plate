import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
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
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
    },
  );

  return response.data;
};

export default postAddStayName;
