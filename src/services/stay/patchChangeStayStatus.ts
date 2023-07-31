import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { NullResultI } from 'types/common';

const patchChangeStayStatus = async ({ stayId }: { stayId: string }) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.PATCH_CHANGE_STAY_STATUS,
    {
      stayId,
    },
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
    },
  );

  return response.data;
};

export default patchChangeStayStatus;
