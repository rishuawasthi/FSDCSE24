// function sum(a,b){
//      return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sum(5,19));




//function as an expression
// const sum=function(a,b){
//      return Math.sqrt(a)+Math.sqrt(b);
// }
// console.log(sum(5,19));


//arrow function
// const sum=(a,b)=>{return a+b}
// console.log(sum(10,5));



// //IIFE
// (()=>{
//     console.log("Heyy....USING IIFE")
// })();


//let and var


//var has a global scope
// var a=23;
// console.log(typeof(a));
// if (a>20){
//     var a=40;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block="+a)


//let has block scope



// //Callback
// function sum(a,b){
//     return a+b;
// }

// function msgWithSum(clbk,msg){
//     const result =clbk(40,50);
//     console.log("Hiii,"+msg+"  and your  result is= "+result);
// }
// msgWithSum(sum,"Rahul");



function login(error,msg){
    if(error){
        console.log("Error is"+error);
    }
    else
    {
        console.log(msg);
    }
}

function loginHandler(username,password,clbk){
    if(username=="rishu_5851" && password=="12345"){
        clbk(null,"login successful");
    }
    else{
        clbk("username or password is incorrect",null);
    }
}
loginHandler("rishu_5851","1235",login)