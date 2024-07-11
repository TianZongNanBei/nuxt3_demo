import { ResultCode, type CommonObject, type IResult } from '~/types/global';

type HTTP_STATUS_CODES_TYPE = Readonly<{
  [key: string]: string;
}>;
type FetchType = typeof $fetch;
type ReqType = Parameters<FetchType>[0];
type OptionType = Parameters<FetchType>[1];

const HTTP_STATUS_CODES_MAP: HTTP_STATUS_CODES_TYPE = {
  400: '错误请求',
  401: '认证信息已过期，请重新登录',
  403: '权限不足，无法访问',
  404: '请求错误，资源未找到',
  405: '方法不允许',
  408: '请求超时',
  409: '资源冲突，请求无法完成',
  410: '所请求的资源已被永久删除',
  412: '前置条件失败，请求无法完成',
  413: '有效负载过大，服务器无法处理',
  414: 'URI 过长，服务器无法处理',
  415: '不支持的媒体类型',
  429: '请求过多，服务拒绝提供',
  451: '因法律原因请求被拒绝',
  500: '内部服务器错误',
  501: '未实现',
  502: '错误网关',
  503: '服务不可用',
  504: '网关超时',
  505: '不支持的 HTTP 版本',
  511: '需要网络认证',
};

function sendRequest<T>(url: ReqType, options?: OptionType): Promise<IResult<T>> {
  return $fetch<IResult<T>>(url, {
    // baseURL: process.env.NUXT_BASE_URL,
    onRequestError({ error }) {
      console.warn('[onRequestError]' + '\n' + error);
    },
    onResponse({ response }) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType !== 'application/json') {
        return Promise.resolve(response._data);
      }

      if (response._data?.code === ResultCode.Success) {
        return Promise.resolve(response._data.data);
      }

      const errorMsg = response._data?.message || '获取数据失败';
      ElMessage.error(errorMsg);
      return Promise.reject(errorMsg);
    },
    onResponseError({ response, error }) {
      console.warn('[onRequestError]' + '\n' + error);
      return Promise.reject(HTTP_STATUS_CODES_MAP[response.status] || '服务异常');
    },

    ...options,
  });
}

class Http {
  public static request<T>(url: ReqType, options?: OptionType): Promise<IResult<T>> {
    return sendRequest<T>(url, options);
  }

  public static get<T>(url: ReqType, params?: CommonObject, options?: OptionType): Promise<IResult<T>> {
    return sendRequest<T>(url, {
      method: 'GET',
      params,
      ...options,
    });
  }

  public static post<T>(url: ReqType, body?: CommonObject, options?: OptionType): Promise<IResult<T>> {
    return sendRequest<T>(url, {
      method: 'POST',
      body,
      ...options,
    });
  }

  public static put<T>(url: ReqType, body?: CommonObject, options?: OptionType): Promise<IResult<T>> {
    return sendRequest<T>(url, {
      method: 'PUT',
      body,
      ...options,
    });
  }

  public static delete<T>(url: ReqType, body?: CommonObject, options?: OptionType): Promise<IResult<T>> {
    return sendRequest<T>(url, {
      method: 'DELETE',
      body,
      ...options,
    });
  }

  public static patch<T>(url: ReqType, body?: CommonObject, options?: OptionType) {
    return sendRequest<T>(url, {
      method: 'PATCH',
      body,
      ...options,
    });
  }
}

export default Http;
