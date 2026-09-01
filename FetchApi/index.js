




const root = document.getElementById('container');
const btn = document.getElementById('btn');
const disp=document.getElementById('disp');
const loader=document.getElementById('loader');



async function fetchdata() {
    // alert("hiiii");
     loader.innerHTML='<h2 style=color:red>Loading Data</h2>'
    try {
       
        const serverData = await fetch('https://fakestoreapi.com/products');
        const jsonData= await serverData.json();

        //console.log(jsonData);
       // disp.innerHTML=`${jsonData[0].title}`;

       let table=`<table border=2px>
       ${
        jsonData.map((ele)=>(
            `<tr>
            <td> <img src=${ele.image} height=200 width=200 ></img></td>
            <td>${ele.title}</td>
            <td>${ele.description}</td>
            <td>${ele.price}</td>
            <td>${ele.category}</td>
            `
        ))
       }
       <table>`
       disp.innerHTML=table;
    } catch (e) {
        console.log('Error is' + e);
    }
    finally {
        loader.innerHTML='';
    }
}

btn.addEventListener('click', fetchdata)