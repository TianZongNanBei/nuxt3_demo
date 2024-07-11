import { CommonResult } from '~/server/common/CommonResult';
import { IDbOperationResult } from '~/types/global';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body, ' <=====> deleteById.body');

  if (!body.id) {
    return CommonResult.fail('参数有误');
  }

  try {
    const db = useDatabase();
    const result = (await db.sql`DELETE FROM user where id = ${body.id}`) as IDbOperationResult;
    console.log(result, ' <=====> deleteById.result');
    return result.success ? CommonResult.successByMessage('删除成功') : CommonResult.fail('删除失败');
  } catch (error) {
    console.log(error, ' <=====> error');
    return CommonResult.fail('系统异常');
  }
});
