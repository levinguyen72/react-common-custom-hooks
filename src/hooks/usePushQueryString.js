import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';

function usePushQueryString() {
  const location = useLocation();
  const history = useHistory();

  function handlePushLocationSearch(data) {
    const locationSearch = qs.parse(location.search);

    history.push({ search: `?${qs.stringify({ ...locationSearch, ...data })}` });
  }
  // return a fn can pass params into
  // const pushQueryString = usePushQueryString(), for ex use when change page execute pushQueryString({ page }) so then url change page param
  return handlePushLocationSearch;
}

export default usePushQueryString;
