import db from "$lib/db/db.js"

export function load() {
    const query = db.query(`select * from tes where name = ?1`);
    const hasil = query.all("fuji");
    query.finalize();

    return {
        hasil: hasil
    }
}