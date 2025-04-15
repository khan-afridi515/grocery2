let input = document.querySelector("input");
let items = document.querySelector(".items");


function give(){
let h3 = document.createElement("h2")
h3.classList.add("items");
items.appendChild(h3);
h3.innerHTML="-  " + input.value;

let add = document.querySelector(".btn");
add.addEventListener("click", ()=>{
    console.log("removed");
    h3.remove();
});

h3.style.cursor="pointer";
h3.style.marginBottom="0";

h3.addEventListener("click", ()=>{
    h3.classList.add("under");
})


input.value="";

}

