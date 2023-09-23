import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    const request = store.put({ id: 1, content: content });  // hard-coded key of 1 - to match that used in getDb
    const result = await request;
    console.log('data saved');
  } catch (err) {
    console.log('err on db put = ', err.message);
  }
};

export const getDb = async() => {
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);  // hard-coded key of 1 - to match that used in putDb
    const result = await request;
    console.log('data retrieved from db');
    return result.content;
  } catch (err) {
    console.log('err on db get = "', err.message, '"');
  }
}

initdb();
