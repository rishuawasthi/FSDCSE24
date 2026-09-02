const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createRoot('h2',{style:{color:'red'}},'Welcome To React Development');
root.render(h2);