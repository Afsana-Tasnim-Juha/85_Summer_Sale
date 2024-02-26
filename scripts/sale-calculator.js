
let total = 0;
let couponApplied = false;

document.getElementById('total').addEventListener('DOMSubtreeModified', function () {
    const totalPrice = parseInt(document.getElementById('total').innerText);
    const purchaseBtn = document.getElementById('btn-Purchase');

    if (totalPrice !== 0) {
        purchaseBtn.removeAttribute('disabled');
    } else {
        purchaseBtn.setAttribute('disabled', true);
    }

    const couponBtn = document.getElementById('btn-apply');

    if (totalPrice >= 200) {
        couponBtn.removeAttribute('disabled');
    }
    else {
        couponBtn.setAttribute('disabled', true);
    }
    document.getElementById('btn-apply').addEventListener('click', function () {
        couponApplied = true;
        const discountAmount = total * 0.2;
        const finalTotal = total - discountAmount;

        document.getElementById('discount').innerText = discountAmount.toFixed(2);
        document.getElementById('final-total').innerText = finalTotal.toFixed(2);
    });

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















