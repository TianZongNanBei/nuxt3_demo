import { CommonResult } from '~/server/common/CommonResult';
import { TabelUser, UserDTO } from '~/types/user';
import { userConverter } from '~/utils/convertor';

export default defineEventHandler(async (event) => {
  const { id, userName }: UserDTO = getQuery(event);
  let data: { rows: TabelUser[] };
  try {
    const db = useDatabase();
    if (!id && !userName) {
      data = await db.sql`SELECT * FROM user`;
    } else if (!id) {
      data = await db.sql`SELECT * FROM user WHERE user_name = ${userName}`;
    } else if (!userName) {
      data = await db.sql`SELECT * FROM user WHERE id = ${id}`;
    } else {
      data = await db.sql`SELECT * FROM user WHERE id = ${id} AND user_name = ${userName}`;
    }
    const result = userConverter(data.rows);
    return CommonResult.successWithData(result);
  } catch (error) {
    console.log(error, ' <=====> error');
    return CommonResult.fail('系统异常');
  }
});
