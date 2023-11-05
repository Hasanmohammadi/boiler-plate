import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';

const deleteStay = async ({ stayId }: { stayId: string }) => {
  const response = await axios.post<NullResultI>(STAY_URLS.DELETE_STAY, {
    data: {
      stayId,
    },
    headers: {},
  });

  return response.data;
};

export default deleteStay;
