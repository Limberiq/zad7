let list = document.getElementById("list");
for(let i = 1; i <= 7; i++){
  if(i === 5){
    continue;
  }
  if(i % 2 !== 0){
    let listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}