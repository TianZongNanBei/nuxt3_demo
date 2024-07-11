import type { IProduct } from '~/types/product';

/**
 * 请求远程数据
 */
export const api_getList = () => $fetch<IProduct>('/home/hot/mutli', { baseURL: useRuntimeConfig().public.baseURL });
