// // 1 -->
// export let message = "ES6 Modules";

// export function user(name){
//     // console.log(`Hello ${name}`);
//     return `Hello ${name}`;
// }

// export class test{
//     constructor(){
//         console.log("Constructor Method");
//     }
// }


// // 2-->
// let message = "ES6 Modules";

// function user(name){
//     return `Hello ${name}`;
// }

// class test{
//     constructor(){
//         console.log("Constructor Method");
//     }
// }

// export { message, user, test };

// // 3 -->
// export default function(){
//     console.log("Hello");
// }

// let message = "ES6 Modules";

// function user(name){
//     return `Hello ${name}`;
// }

// export { message , user };


// 4 -->
function user(){
    return `Hello`;
}

export { user };