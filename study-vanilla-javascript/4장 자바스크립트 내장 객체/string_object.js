let txt1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln1 = txt1.length;
console.log(sln1);

let str1 = "Please locate where 'locate' occurs!";
let pos1 = str1.indexOf("locate");
console.log(pos1);

let str2 = "Please locate where 'locate' occurs!";
let pos2 = str2.lastIndexOf("locate");
console.log(pos2);

let str3 = "Apple, Banana, Kiwi";
let res1 = str3.slice(7, 13);
console.log(res1);

let str4 = "Apple, Banana, Kiwi";
let res2 = str4.slice(7);
console.log(res2);

let str5 = "Apple, Banana, Kiwi";
let res3 = str5.slice(-12);
console.log(res3);

let str6 = "Apple, Banana, Kiwi";
let res4 = str6.substring(7);
console.log(res4);

let str7 = "Apple, Banana, Kiwi";
let res5 = str7.substr(7, 6);
console.log(res5);

let str8 = "Apple, Banana, Kiwi";
let res6 = str8.substr(7);
console.log(res6);

let str9 = "Apple, Banana, Kiwi";
let res7 = str9.substr(-12);
console.log(res7);

let text1 = "Hello, World!";
let text2 = text1.toUpperCase();
console.log(text2);

let text3 = "Hello, World!";
let text4 = text3.toLowerCase();
console.log(text4);

let text5 = "Hello";
let text6 = "World";
let text7 = text5.concat(" ", text6);
console.log(text7);
