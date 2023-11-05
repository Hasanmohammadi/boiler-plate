import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';
import { EditStayPolicyI } from 'types/stay';

const putEditStayPolicy = async ({
  childPolicies,
  hotelId,
  noShowMin,
  noshowHour,
  onlyAdultAccepted,
  onlyManNotAccepted,
  stayPolicyId,
  vendorId,
  vendorStayPolicyId,
}: EditStayPolicyI) => {
  const response = await axios.put<NullResultI>(
    STAY_URLS.PUT_EDIT_STAY_POLICY,
    {
      childPolicies,
      hotelId,
      noShowMin,
      noshowHour,
      onlyAdultAccepted,
      onlyManNotAccepted,
      stayPolicyId,
      vendorId,
      vendorStayPolicyId,
    },
    {
      headers: {},
    },
  );

  return response.data;
};

export default putEditStayPolicy;
