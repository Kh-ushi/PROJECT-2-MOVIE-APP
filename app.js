let img=document.querySelector(".changeImg");
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let div=document.querySelector(".part2-two");
let h1=document.querySelector(".part2-two h1");
let p=document.querySelector(".part2-two p");
let ul=document.querySelector(".part2-two ul");

let p2=document.createElement("p");

let p3=document.createElement("p");

function remove(){
    h1.remove();
    p.remove();
    ul.remove();
    p2.remove();
    p3.remove();
}

function add(){
    h1=document.createElement("h1");
    h1.innerText=`Movie Name:-${info.l}`;
    div.appendChild(h1);

    p=document.createElement("p");
    p.innerText=`Year it was released:-${info.y}`;
    div.appendChild(p);

    p2.innerText=`Ranking By ImDb:-${info.rank}`;
    div.appendChild(p2);
     
    p3.innerText=`Cast:-${info.s}`;
    div.appendChild(p3);
    
}


btn.addEventListener("click",()=>{
    let info;
   
    fetch( `https://imdb8.p.rapidapi.com/auto-complete?q=${inp.value}`,
 {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a802d1ee9msh41f8411fad0b9a7p17e43ajsnadbd64a52109',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})

.then(res=>res.json())
.then((data)=>{
     
    info=data.d[0]
    img.src=`${info.i.imageUrl}`;
    console.log(info);
    remove();

    h1=document.createElement("h1");
    h1.innerText=`Movie Name:-${info.l}`;
    div.appendChild(h1);

    p=document.createElement("p");
    p.innerText=`Year it was released:-${info.y}`;
    div.appendChild(p);

    p2.innerText=`Ranking By ImDb:-${info.rank}`;
    div.appendChild(p2);
     
    p3.innerText=`Cast:-${info.s}`;
    div.appendChild(p3);
    


    
})
.catch((err)=>{
   console.log(err);
});



   
    

});



