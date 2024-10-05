// // 1 -->
// // import { message, user, test } from "./library.js";
// import { message, user as us, test } from "./library.js";

// console.log(message);

// // document.body.innerHTML = message;

// // user("Deepak Thakur");

// // console.log(user("Deepak Thakur"));
// console.log(us("Deepak Thakur"));

// let a = new test();


// // 2 -->
// import * as deepak from "./library.js";

// console.log(deepak.message);

// console.log(deepak.user("Deepak Thakur"));

// let a = new deepak.test();

// // 3 -->
// // import { default as deepak } from "./library.js";
// import deepak from "./library.js";
// import {message, user} from "./library.js";

// deepak();

// console.log(message);

// console.log(user("Deepak Thakur"));


// 4 -->
import { user } from "./bridge.js";

console.log(user());