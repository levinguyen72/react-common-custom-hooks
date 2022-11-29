import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';
//hook use for get data from url
function useQueryString() {
  const location = useLocation();
  const queryString = useMemo(() => qs.parse(location.search), [location.search]);

  return queryString; //  for example { page: 1, search: 'abc', filter: 'male' }
}

export default useQueryString;

// common used for list like: pagination, sort, filter