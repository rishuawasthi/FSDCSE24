const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);


const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'Welcome To React Development');
const h1=React.createElement('h1',{style:{color:'brown'}},'ABES Engineering College');


const img=React.createElement('img',{src:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2b5uFx.img?w=768&h=370&m=6',style:{height:'200px',width:'200px'}})

const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);

 const h21=<h2>Hello World</h2>//jsx
 const d21=<div><h2>hello raju</h2><h5>hope  you are doing well</h5></div>
 const img21=<img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2bLTTI.img?w=768&h=432&m=6&x=437&y=77&s=145&d=145"></img>
 const d23=<div>{h21}{d21}{img21}</div>
 const wapper=<div style={{border:'2px solid redd'}}>{div}
 <h2>Hey,using JSX</h2>
 </div>
root.render(wapper);