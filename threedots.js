const ages = [12, 34, 5, 6, 78, 953, 35, 67, 2];
const ages2 = [1, 2, 3, 4, 5, 6, 74, 34, 55, 33, 2];
const ages3 = [1, 21, 34, 48, 52, 62, 574, 234, 655, 133, 22];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);


const business = 4537858;
const minister = 254287354;
const sochib = 2534546327;
// const maximum = Math.max(business, minister, sochib);
const takaPoisha = [1323, 3434, 3534, 23423, 3656]
const maximum = Math.max(...takaPoisha);
console.log(maximum);