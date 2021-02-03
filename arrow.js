// 

// const doubleIt = function(num) {
//     return num * 2
// }


// single parameter
const doubleIt = num => num * 2;
// উপরের doubleIt'র পরের num হচ্ছে parameter এবং => এর পরের পার্ট হচ্ছে return করবে।
// more than one parameter
const add = (x, y) => x + y;
// no parameter
const give5 = () => 5;

// multi line
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result2 = doMath(5, 7);
console.log(result2);


const result = give5();
console.log(result);