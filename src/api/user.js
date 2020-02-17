import request from '../utils/axios';

export function fetchList(params) {
  return request({
    url: '/users',
    method: 'get',
    data: params
  });
}
