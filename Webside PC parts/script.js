/*
1. document.getElementById("formOrders") get the element of the id formOrders from the HTML document
2. .addEventListener('submit',.. listens to an event from the submit button, and function(event) gets executed when a form is submitted
*/
document.getElementById("formOrders").addEventListener('submit', function(event){
    //prevents the default action of the event, which is sending the form to a database.
    event.preventDefault();

    //const variables are chosen because they are not to be changed, these variable store the value recieved from the chosen ID object.
    const component = document.getElementById('component').value;
    const quantity = document.getElementById('quantity').value;

    //if the quantity is less than 1, we need to throw an error, because you cant order less than 1 object.
    if (quantity < 1){
        alert(`Error: Your order doesnt include any products`);
    }
    //if the quantity is exactly 1, we shouldnt end with a "s" after the component
    else if (quantity == 1){
        alert(`Order placed for ${quantity} ${component}!`);
    }
    //if non of the above is used, use this. This is used when there are several objects added, including a "s" at the end.
    else{
        alert(`Order placed for ${quantity} ${component}s!`);
        }
});