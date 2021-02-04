const person = { name: "Jack William", age: 17, job: "facebooker", gfName: "Ema Watson", address: "Kochu Khet", phone: "01879836217", friends: ["faria", "jaria", "maria"] }


// এখানে variable'র বাম পাশে {}'র ভিতরে object'র property-কে বুঝাচ্ছে যেটা আমরা চাচ্ছি।
const { phone, gfName } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone);






const friends = ["sakib khan", "salman khan", "shahrukh khan", "amir khan", "jayed khan"];

const [chotoFriends, nextFriends, ...restFriends] = friends;
// console.log(...restFriends);




const complexObject = {
    name: "avsv",
    info {
        address: "kola bagan",
        leader: "tiger leader"
    }
}

const { leader } = complexObject.info;