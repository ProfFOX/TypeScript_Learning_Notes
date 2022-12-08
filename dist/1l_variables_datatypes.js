"use strict";
/*

*/
// string
let f_name; // decleration
let l_name = "Last Name"; // initialization
// l_name = 9   -- it will throw an error because you can't assign number to type string
l_name.toUpperCase(); // one you add . (dot) next to any variable it will show the related functions
console.log(l_name);
// number
let price = 90;
let price1 = 90.5; // number works for int, float and double as well
let price2 = 44; // typescript is smart enough to guess the datatype and it will stick to is 
//price2 = '33'     -- even if we didn't specify the datatype for the variable still typescript will
//                  -- throw an assignmet error saying 
// boolean
let isConnect = true; // : boolean is a typescript syntax
// any
// it is not a good practice to use any if we want to stop using any we can do it through 
// noImplicitAny option in tsconfig.json
let obj; // any will turn off the type chacking for this particular variable 
function fun1() {
    return "hello";
}
obj = fun1();
