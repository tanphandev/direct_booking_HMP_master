import axios from 'axios';
import configEnv from '../configs/env/env';

const METHOD_GET = 'get';
const METHOD_POST = 'post';
const METHOD_PUT = 'put';
const METHOD_DELETE = 'delete';

export type ApiResponse<T> = {
  message(message: any): string;
  pageNumber(pageNumber: any): unknown;
  essay: any;
  map(arg0: (val: any) => { value: any; label: any }): unknown;
  status?: number;
  data: T;
};
export type ApiResponseFaqs<T> ={
  business_navigation:[
    
  ];
}
export const getCookie = (name: string) => {
  const value = ` ${document.cookie}`;
  const parts = value.split(` ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split('').shift();
};

// Function to delete a cookie by name
function deleteCookie(name: string) {
  document.cookie = name + '= expires=Thu, 01 Jan 1970 00:00:01 GMT path=/';
}

// Function to delete all cookies
export const deleteAllCookies = () => {
  const cookies = document.cookie.split('');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.slice(0, eqPos + 1) : cookie;
    deleteCookie(name.trim());
  }
};

async function requestAPI(
  method: string,
  url: string,
  headers: object = {
    'Content-Type': 'application/json'
  },
  dataBody: FormData | undefined | string | object = {},
  baseUrl: string | undefined = configEnv['BASE_URL']
): Promise<ApiResponse<any>> {
  const config: { [k: string]: any } = {
    url: `${baseUrl}/${url}`,
    headers: { ...headers },
    method
  };

  if (method === METHOD_GET) {
    config.params = dataBody;
  } else {
    config.data = dataBody;
  }
  return axios({ ...config, timeout: 180000 })
    .then((value: any) => {
      return value?.data;
    })
    .catch((e) => {
      if (e?.response?.status === 401) {
      }
      throw e;
    });
}

const ApiCaller = {
  get(url: string, data: FormData | any = null, headers: object = {}, baseUrl?: string) {
    return requestAPI(METHOD_GET, url, headers, data, baseUrl);
  },
  post(
    url: string,
    // data: string | FormData | undefined,
    data: any,
    headers: object = {},
    baseUrl?: string
  ) {
    return requestAPI(METHOD_POST, url, headers, data, baseUrl);
  },
  put(url: string, data: any, headers: object = {}, baseUrl?: string): Promise<ApiResponse<any>> {
    return requestAPI(METHOD_PUT, url, headers, data, baseUrl);
  },

  delete(url: string, data: FormData, headers: object = {}, baseUrl: string): Promise<ApiResponse<any>> {
    return requestAPI(METHOD_DELETE, url, headers, data, baseUrl);
  }
};

export default ApiCaller;
