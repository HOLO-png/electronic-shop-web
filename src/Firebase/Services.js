// ở đây sẽ lưu trữ các method để tương tác với firebase quản lý tài khoản, quản lý sản phẩm

import firebase, { db } from './config';

export const addDocument = (collection, data) => {
    const query = db.collection(collection);

    query.add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
