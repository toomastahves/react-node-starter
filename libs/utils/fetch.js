import { SERVER_URI } from '../../client/constants/';

export const fetch = ({ path, type, data }) => {
  const url = `${API_URI}${path}`;
  console.log(`${type} ${url}`);
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();

    // CORS support
    if ('withCredentials' in req) {
      req.open(type, url, true);
    } else if (typeof XDomainRequest != 'undefined') {
      req = new XDomainRequest();
      req.open(type, url);
    } else {
      req = null;
    }

    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.onload = function() {
      if(req.status === 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject(JSON.parse(req.response));
      }
    };
    req.onerror = function() {
      reject(JSON.parse({ error: { message: 'Network error' } }));
    };
    req.send(data);
  });
};

export const delay = (time) => {
  return new Promise(resolve => setTimeout(resolve, time));
};
