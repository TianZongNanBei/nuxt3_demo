import { IResult, ResultCode } from '~/types/global';

export class CommonResult<T> implements IResult<T> {
  public code: ResultCode;
  public message: string = '';
  public data: T | null = null;

  constructor(code: ResultCode, message: string, data?: T) {
    this.code = code;
    this.message = message;
    data && (this.data = data);
  }

  public static successWithData<R>(data: R, message: string = 'success') {
    return new CommonResult(ResultCode.Success, message, data);
  }

  public static successByMessage(message: string = 'success') {
    return new CommonResult(ResultCode.Success, message);
  }

  public static fail(message: string = 'fail') {
    return new CommonResult(ResultCode.Fail, message);
  }
}
