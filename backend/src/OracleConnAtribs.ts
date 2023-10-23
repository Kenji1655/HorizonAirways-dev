import {ConnectionAttributes} from "oracledb";
import dotenv from "dotenv";

dotenv.config();

export const oraConnAttribs: ConnectionAttributes = {
  user: process.env.ORACLE_USER,
  password: process.env.ORACLE_PASSWORD,
  connectString: `${process.env.ORACLE_HOST}:${process.env.ORACLE_PORT}/${process.env.ORACLE_DB}`
};