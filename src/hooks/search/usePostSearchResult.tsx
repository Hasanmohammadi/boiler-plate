import { AxiosError } from 'axios';
import { convertApiToFrontData } from 'helpers/places';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { postSearchResult } from '../../services/search';
import { GetSearchResultResultI } from '../../types/search';

export default function usePostSearchResult() {
  const { mutate, isLoading, data } = useMutation(postSearchResult, {
    onSuccess: () => {},
    onError(err) {
      const error = err as AxiosError;
      toast.error(error.message);
    },
  });

  return {
    postSearchResultAction: mutate,
    postSearchResultLoading: isLoading,
    searchResultData: convertApiToFrontData(
      data as GetSearchResultResultI,
    ),
  };
}
