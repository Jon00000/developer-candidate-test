import request from '../utils/request';
import * as Config from '../config/config'

const url = Config.SERVER_ADDR;

function createURL(url, param) {
  var urlLink = '';

  for (let key in param) {
    let link = '&' + key + "=" + param[key];
    urlLink += link;
  }
  urlLink = url + "?" + urlLink.substr(1);
  return urlLink.replace(' ', '');
}


export function query(payload) {
  let uri = createURL(`${url}/people`, payload);
  console.log(uri)
  return request(uri, {
    // credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
    },
    method: 'GET'
  });
}
