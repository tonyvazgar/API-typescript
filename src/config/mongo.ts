import { connect } from "mongoose";
import "dotenv/config";

const NODE_ENV = process.env.NODE_ENV;

async function dbConnect(): Promise<void> {
    const DB_URI: string = <string>process.env.DB_URI_TEST;
    await connect(DB_URI);
}

export default dbConnect;

// module.exports = dbConnect;