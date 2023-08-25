
let total = 0;
document.getElementById('correct-coupon').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const couponBtn = document.getElementById('btn-apply');

    if (text === 'SELL200') {
        couponBtn.removeAttribute('disabled');
    }
    else {
        couponBtn.setAttribute('disabled', true);
    }
});




function handleClickBtn(target) {
    const selectedProductsContainer = document.getElementById('selected-products');
    const itemName = target.innerText;
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedProductsContainer.appendChild(li);

    const price = target.closest('.card').querySelector('.text-gray-400 span').innerText;
    total = parseInt(total) + parseInt(price);
    document.getElementById("total").innerText = total;




}











