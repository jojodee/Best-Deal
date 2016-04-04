var message = "1 for R3, 2 for R7, 3 for R10, 5 for R14.50.";
  var myPrice = [];
    var message = message.replace('0.', '0').replace(/for R/g , "");
        var products = message.split(", ");
      var productsList = products.forEach(function(deal){
    myPrice.push(deal.split(" "));
});
  priceAvo = [];
    myPrice.forEach(function(arr){
    priceAvo.push(Number((Number(arr[1])/Number(arr[0])).toFixed(2)));
  });
   cheapestDeal = Math.min.apply(null, priceAvo);
  console.log(cheapestDeal);
  mostExpensiveDeal =  Math.max.apply(null, priceAvo);
       console.log(mostExpensiveDeal);
  sumOfPrice += priceAvo;
var sumOfPrice =priceAvo.reduce(add, 0);
  function add(a, b) {
    return a + b;
}
averagePrice = Number((sumOfPrice/priceAvo.length).toFixed(2));
  console.log(averagePrice);
