import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { postCreateSearch } from 'services/search';

export interface UsePostCreateSearchArgsI {
  onSuccess?: (searchId: string) => void;
}

export default function usePostCreateSearch({
  onSuccess,
}: UsePostCreateSearchArgsI) {
  const { mutate, isLoading, data } = useMutation(postCreateSearch, {
    onSuccess: ({ searchId, noResultFound }) => {
      if (noResultFound) {
        toast.warning('No result found', {
          style: {
            border: '3px solid yellow',
            borderRadius: '8px',
            background: 'white',
          },
        });
      } else if (onSuccess) onSuccess(searchId);
    },
    onError(err) {
      const error = err as AxiosError;
      toast.error(error.message);
    },
  });

  return {
    postCreateSearchAction: mutate,
    postCreateSearchLoading: isLoading,
    createSearchData: data,
  };
}
