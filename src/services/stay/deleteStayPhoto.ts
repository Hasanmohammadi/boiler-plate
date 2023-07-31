import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import Cookies from 'js-cookie';
import { NullResultI } from 'types/common';

interface DeleteStayPhotoArgsI {
  stayId: string;
  photoId: string;
}

const deleteStayPhoto = async ({
  stayId,
  photoId,
}: DeleteStayPhotoArgsI) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.DELETE_STAY_PHOTO,
    {
      data: {
        stayId,
        photoId,
      },
      headers: {
        Authorization: `Bearer ${Cookies.get('userToken') as string}`,
      },
    },
  );

  return response.data;
};

export default deleteStayPhoto;
