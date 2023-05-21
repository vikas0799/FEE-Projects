const ip = document.querySelector("input");
const addBtn = document.querySelector("button")
const list = document.querySelector(".list");

addBtn.addEventListener("click",function()
{
    const el = document.createElement("div");
    el.textContent = ip.value;
    el.setAttribute("class","item");
    
    list.append(el);
})