//function handleClickBtn(target) {
//const selectedProductsContainer = document.getElementById('selected-products')
//const itemName = target.parentNode.childNodes[6].innerText;
//const li = document.createElement("li");
//li.innerText = itemName;
//selectedProductsContainer.appendChild(li);
//}

function handleClickBtn(target) {
    const selectedProductsContainer = document.getElementById('selected-products');
    const itemName = target.innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedProductsContainer.appendChild(li);


}
