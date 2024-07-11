export enum ResultCode {
  Fail = '0',
  Success = '1',
}

export interface IResult<T> {
  /**
   * 0 失败
   * 1 成功
   */
  code: ResultCode;
  message?: string;
  data?: T | null;
}

export interface IDbOperationResult {
  success: boolean;
}

export type CommonObject = Record<string, any>;
