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


//login validation
// function login(error,msg){
//     if(error){
//         console.log("Error is  "+error);
//     }
//     else
//     {
//         console.log(msg);
//     }
// }

// function loginHandler(username,password,clbk){
//     if(username=="rishu_5851" && password=="12345"){
//         clbk(null,"login successful");
//     }
//     else{
//         clbk("username or password is incorrect",null);
//     }
// }
// loginHandler("rishu_5851","1235",login)

//synchronization
// console.log ("one")
// console.log ("two")
// console.log ("three")


//asynchronous
// setTimeout(()=>{console.log("two")},1000)
// console.log("three")


//DOM

const container=document.getElementById('container');
const button=document.getElementById('btn');

const h1=document.createElement('h1');
console.log(h1)
const img=document.createElement('img');
console.log(container);
console.log(button);
const loader=document.createElement('h2');
h1.innerText='ABES Engineering College';
function ping(){
    //alert('server ping')

    container.innerHTML=`<div style=border:solid><h2>ABES ENGINEERING College</h2> 
    <h3>Rishu Awasthi</h3>
    <h3>Skills=>javascript,css,html</h3>
    </div>`
 
    h1.style.backgroundColor='cyan';
    h1.style.color='red';
    container.appendChild(h1);
    try{
    img.src='https://www.w3schools.com/js/img_htmltree_800.svg';
    img.setAttribute('height',200);
    img.setAttribute('width',200);
    container.appendChild(img);}
    catch(e){
        loader.innerHTML=`<h2 style=color:red>Error in loading image</h2`;
    }
    finally{
        //loader.innerHTML='';
        container.removeChild(loader);
    }

    button.style.display='none';
}


button.addEventListener('click',ping)



