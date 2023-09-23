import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      // db.createObjectStore('jate');  // TODO - see if this solves are put error problem
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// export const putDb = async (content) => console.error('putDb not implemented');
export const putDb = async (content) => {
  console.log('beginning idb put version 9:30');  // TODO
  try {
    const jateDb = await openDB('jate', 1);  // TODO - what does the 1 do?
    const tx = jateDb.transaction('jate', 'readwrite');  // TODO - This jate is DB?
    const store = tx.objectStore('jate');  // TODO - This jate is store?  (maybe make them different later?)
    const request = store.put({ id: 1, content: content });  // TODO - we just always use 1
    const result = await request;
    console.log('data saved = "', request, '"');
    console.log('ending idb put');
  } catch (err) {
    console.log('err on db put = ', err.message);
  }
};

// TODO: Add logic for a method that gets all the content from the database
// export const getDb = async () => console.error('getDb not implemented');
export const getDb = async() => {
  console.log('beginning db get version 9:30');  // TODO
  try {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.get(1);  // TODO - same key as used in put
    const result = await request;
    console.log('db get result = ', JSON.stringify(result));;
    console.log('end db get');
    return result.content;
  } catch (err) {
    console.log('err on db get = "', err.message, '"');
  }
}

initdb();
