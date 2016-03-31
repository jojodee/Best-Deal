var message = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
//message received
var products = message.split(",");

products.forEach(function(deal){
        console.log(deal);

});
