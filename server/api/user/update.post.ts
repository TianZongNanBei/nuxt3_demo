import { CommonResult } from '~/server/common/CommonResult';
import { IDbOperationResult } from '~/types/global';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body, ' <=====> update.body');

  if (!body.id) {
    return CommonResult.fail('ID不能为空');
  }

  if (!body.userName) {
    return CommonResult.fail('姓名不能为空');
  }

  try {
    const db = useDatabase();
    const result = (await db.sql`UPDATE user SET user_name = ${body.userName} where id = ${body.id}`) as IDbOperationResult;
    console.log(result, ' <=====> update.result');
    return result.success ? CommonResult.successByMessage('修改成功') : CommonResult.fail('修改失败');
  } catch (error) {
    console.log(error, ' <=====> error');
    return CommonResult.fail('系统异常');
  }
});
