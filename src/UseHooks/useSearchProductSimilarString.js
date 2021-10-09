// import { useState } from 'react';
// export const isEmptyObject = (v) => {
//     return !!v && v.constructor === Object && Object.keys(v).length === 0;
// };
// export const useSearchProductSimilarString = (product) => {
//     const [data, setData] = useState({});

//     if (!isEmptyObject(product)) {
//         const productClone = { ...product };
//             setData({
//                 category: productClone.category,
//                 trademark: productClone.trademark,
//                 name: productClone.name,
//             });
//         //     return data;
//         console.info(productClone);
//     } else {
//         return null;
//     }
// };
