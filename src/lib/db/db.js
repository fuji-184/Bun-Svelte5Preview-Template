import { Database } from "bun:sqlite";

const db = new Database("fuji.sqlite", { create: true });
db.exec("PRAGMA journal_mode = WAL;");

// const query = db.query(`create table tes(name text);`);
// query.run();
// query.finalize();

// const query = db.query(`insert into tes(name) values("fuji");`);
// query.run();
// query.finalize();

export default db