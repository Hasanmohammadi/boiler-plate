import axios from 'axios';
import { STAY_URLS } from 'constants/urls';
import { NullResultI } from 'types/common';

const postAddStayPhotos = async (formData: FormData) => {
  const response = await axios.post<NullResultI>(
    STAY_URLS.POST_ADD_STAY_PHOTOS,
    {
      hotelId: formData.get('hotelId'),
      categoryId: formData.get('categoryId'),
      name: formData.get('name'),
      photoLinks: formData.get('photoLinks'),
      photoFiles: formData.get('photoFiles'),
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export default postAddStayPhotos;
