import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { Params } from 'react-router-dom';
import { NullResultI } from 'types/common';

interface PostAddVendorStaysI {
  vendorId: string | Readonly<Params<string>>;
  stayIds: string[];
  addMode: boolean;
}
const postAddVendorStays = async ({
  vendorId,
  stayIds,
  addMode,
}: PostAddVendorStaysI) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.POST_ADD_VENDOR_STAY,
    {
      vendorId,
      stayIds,
      addMode,
    },
    {
      headers: {},
    },
  );

  return response.data;
};

export default postAddVendorStays;
