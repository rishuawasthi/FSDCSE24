const root = document.getElementById('container');
const button = document.getElementById('btn');
console.log(root);
const h2 = document.createElement('h2');
const img = document.createElement('img');
const div = document.createElement('div');

function showData() {
    try {
        h2.innerHTML = 'Welcome to DOM';
        h2.style.color = 'red';
        h2.style.backgroundColor = 'cyan';
        img.src = 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2bcDQC.img?w=268&h=140&q=60&m=6&f=jpg&x=512&y=178&u=t';
        img.setAttribute('height', 200)
        img.setAttribute('width', 200)


        div.appendChild(img);
        div.appendChild(h2);


        div.style.border = 'dotted';
        div.style.backgroundColor = 'pink';
        root.appendChild(div);


    } catch (e) {
        console.log("The error is" + e);
    }
    finally{
        button.style.display='none';
    }
}

button.addEventListener('click', showData);
