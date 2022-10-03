// 引入資料庫與元件
const dbFile = "./src/database/repo.db";
import sqlite, { open, ISqlite, IMigrate } from "sqlite";
import sqlite3 from "sqlite3";

export class Database {
  // 資料庫
  private _db: Promise<sqlite.Database<sqlite3.Database, sqlite3.Statement>> = open({
    filename: dbFile,
    driver: sqlite3.Database
  });

  constructor() { }

  /**
   * 新增一行資料
   * @param insertSQL 新增語法
   */
  // public async insert(insertSQL: string) {
  //   this._db.each(insertSQL, (err, row) => {
  //     if (err) return err;
  //     return row;
  //   })
  // }

  /**
   * 查詢資料庫
   * @param selectSQL 查詢的語法
   */
  public async select(selectSQL: string) {
    return (await (await this._db).all(selectSQL));
  }
}
