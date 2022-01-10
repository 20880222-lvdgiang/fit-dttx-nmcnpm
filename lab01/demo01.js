/***
 * Khai báo biến trong JavaSript -> ECMA Script (ES)
 */

console.log('Hello World');
//Khai báo hằng số
const a=100;
console.log("const a =",a);

//Khai báo biến toàn cục và cục bộ trong Code Block
let b = 10;
var c = 1;

console.log("let b =",b);
console.log("var c =",c);

//Kiểm tra sự khác nhau giữa 3 loại const, var, let
//a=99;
b=999;
c=888;
console.log("let b =",b);
console.log("var c =",c);

flag=true;
if(flag==true)
{
    console.log("=> a =",a);
    console.log("=> b =",b);
    console.log("=> c =",c);
}