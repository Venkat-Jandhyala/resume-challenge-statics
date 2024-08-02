import axios from 'axios';

export const updatePageVisits = () => axios
  .get('/apis/function/rc-count-visits-cf')
  .then(res => res?.data)