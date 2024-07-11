import { CommonResult } from '~/server/common/CommonResult';
import { IDbOperationResult } from '~/types/global';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body, ' <=====> add.body');

  if (!body.userName) {
    return CommonResult.fail('参数有误');
  }

  try {
    const db = useDatabase();
    const result = (await db.sql`INSERT INTO user VALUES(null, ${body.userName})`) as IDbOperationResult;
    console.log(result, ' <=====> add.result');
    return result.success ? CommonResult.successByMessage('新增成功') : CommonResult.fail('新增失败');
  } catch (error) {
    console.log(error, ' <=====> error');
    return CommonResult.fail('系统异常');
  }
});
