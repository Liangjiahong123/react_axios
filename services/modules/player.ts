import request from '../request';

export const getData = (params = {}) => {
  return request.get({ url: '/xxx', params });
};