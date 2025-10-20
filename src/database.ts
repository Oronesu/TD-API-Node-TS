import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

// Explication : Ouvre une connexion à la base SQLite et expose-la
let dbInstance: any;

export const initDB = async () => {
  if (!dbInstance) {
    dbInstance = await open({
      filename: './data/users.db',
      driver: sqlite3.Database
    });
  }
  return dbInstance;
};


