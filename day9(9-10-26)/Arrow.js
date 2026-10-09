let arrFun=()=>console.log("This is arrow");// declaration of one statement
arrFun();
let arrFun1=()=>{
    let a=10;
    console.log("This is arrow");
    console.log(a);
}
arrFun1();
/*let obj={
    name:"lav",
    age:20,
    fun:()=>{
        console.log(this.age);//this is used to target the current object
    }
}
obj.fun(); in this code output is undefined*/
let obj={
    name:"lav",
    age:20,
    fun:function(){//anonymous function
        console.log(this.age);//this is used to target the current object
    }
}
obj.fun();
//arrow function with parameters
const loginDetails=(username,password)=>{
    console.log(`username :${username}`);
    console.log(`password : ${password}`);
    return "Login Sucessful"; //to access outside the block we use return 
}
loginDetails();// when you call this function without parameters it output is undefined
res=loginDetails("admin@13","admin@123");
console.log(res);
console.log(loginDetails("admin@13","admin@123"));
