function* generateFun(){
            yield a=10;
            yield b=20;
            console.log("This is generate function");
        }
let res=generateFun();
console.log(res.next().value);
console.log(res.next().value);
console.log(res.next());
