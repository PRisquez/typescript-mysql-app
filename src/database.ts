import {createPool, Pool} from 'mysql2/promise';

export async function connect():Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'secret',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });
    return connection;
}