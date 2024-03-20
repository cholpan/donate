const block = document.querySelector(".block");
const paginationCount = document.querySelector(".pagination-count")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
let page = 1

fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
.then((data)=> data.json())
.then((data)=>{
console.log(data);

data.results.map((character)=>{
    block.innerHTML += `
    <div class="box">
    <img src="${character.image}"alt="" />
    <h3>${character.name}</h3>
    </div>
    `
});

paginationCount.textContent=`${page} of ${data.info.pages}`
if((page = 1)){
prev.disabled = true
}
if(page == data.info.pages){
    disabled = true
}
});

next.addEventListener("click",()=>{
    page++;

fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
.then((data)=> data.json())
.then((data)=>{
    paginationCount.textContent=`${page} of ${data.info.pages}`
    setTimeout(()=>{
        block.innerHTML=""

    },500)
    window.scrollTo(0,0)
    setTimeout(()=>{
        data.results.map((character)=>{
            block.innerHTML += `
            <div class="box">
            <img src="${character.image}"alt="" />
            <h3>${character.name}</h3>
            </div>
            `
         });
      },1000)
   });
});