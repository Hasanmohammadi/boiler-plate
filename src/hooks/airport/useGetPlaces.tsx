import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getPlaces } from 'services/basicInformation';
import { PlacesI } from 'types/basicInformation';

interface GetPlacesArgsI {
  name: string;
  count: number;
  queryKey?: string;
}

export default function useGetPlaces({
  name,
  count,
  queryKey,
}: GetPlacesArgsI) {
  const { data, isLoading, refetch } = useQuery<PlacesI[]>(
    queryKey || 'getPlaces',
    () =>
      getPlaces({
        count,
        name,
      }),
    {
      cacheTime: 0,
      enabled: false,
    },
  );

  useEffect(() => {
    if (name?.length > 0) {
      setTimeout(() => {
        refetch().catch((err) => console.log(err));
      }, 1000);
    }
  }, [name]);

  return {
    getPlacesData: data as PlacesI[],
    placesLoading: isLoading,
    getPlacesAction: refetch,
  };
}
