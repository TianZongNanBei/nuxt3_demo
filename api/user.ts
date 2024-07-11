import type { User, UserDTO } from '~/types/user';
import Http from '~/utils/request';

/**
 * 获取用户列表的API调用。
 *
 * 该函数通过发送一个GET请求到'/api/user/getList'来获取用户的列表数据。
 * 返回值是一个包含用户信息的数组。
 */
export const api_getList = (params: UserDTO) => Http.get<User[]>('/api/user/getList', params);

/**
 * 添加用户的API调用。
 *
 * 该函数通过发送一个POST请求到'/api/user/add'来添加新的用户。
 * 返回值是一个包含新添加用户信息的数组。
 */
export const api_add = (body: { userName: string }) => Http.post('/api/user/add', body);

/**
 * 更新用户信息的API调用。
 *
 * 该函数通过发送一个POST请求到'/api/user/update'来更新指定用户的详细信息。
 * 返回值是一个包含更新后用户信息的数组。
 */
export const api_update = (body: { userName: string }) => Http.post('/api/user/update', body);

/**
 * 根据ID删除用户的API调用。
 *
 * 该函数通过发送一个POST请求到'/api/user/deleteById'来删除指定ID的用户。
 * 返回值是一个包含被删除用户信息的数组。
 */
export const api_deleteById = (body: { id: number }) => Http.post('/api/user/deleteById', body);
