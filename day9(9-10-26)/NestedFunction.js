/*function outerFun(){
    console.log("Outer Executing...");
    let a=10;
    function innerFun(){
        console.log("Inner Executing ...");
        console.log(a);
    }
    innerFun();
}
outerFun();//always call outer function and inner function inside the outer  function.
output:
Outer Executing...
Inner Executing ...
10*/
/*function outerFun(){
    console.log("Outer Executing...");
    let a=10;
    function innerFun(){
        console.log("Inner Executing ...");
        return a++;
    }
    return innerFun;
}
console.log(outerFun());
output:
Outer
 Executing...
[Function: innerFun]
*/
function outerFun(){
    console.log("Outer Executing...");
    let a=10;
    function innerFun(){
        console.log("Inner Executing ...");
        return a++;
    }
    return innerFun;
}
let res=outerFun();
console.log(res());
console.log(res());
console.log(res());
/*output:
    Outer Executing...
Inner Executing ...
10
Inner Executing ...
11
Inner Executing ...
12
*/