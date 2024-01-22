document.getElementById("formOrders").addEventListener('submit', function(event){
    event.preventDefault();

    const component = document.getElementById('component').value;
    const quantity = document.getElementById('quantity').value;

    if (quantity < 1){
        alert(`Your order doesnt include any products`);
    }
    else{
        alert(`Order placed for ${quantity} ${component}s!`);
    }
});