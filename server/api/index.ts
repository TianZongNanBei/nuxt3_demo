(async function () {
  const db = useDatabase();

  // 创建数据库
  const sql = `CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_name VARCHAR(20)
);`;

  await db.exec(sql);
})();
