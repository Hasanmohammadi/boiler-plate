import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { NullResultI } from 'types/common';

const deleteStay = async ({ stayId }: { stayId: string }) => {
  const response = await axios.post<NullResultI>(STAY_URLS.DELETE_STAY, {
    data: {
      stayId,
    },
    headers: {
      Authorization: `Bearer ${Cookies.get('userToken') as string}`,
    },
  });

  return response.data;
};

export default deleteStay;
