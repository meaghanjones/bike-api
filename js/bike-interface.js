var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#bikeCity').click(function(){
    var city = $('#city').val();
    var stolenBikes = currentBikeObject.getBikesByLocation(city);

});
});
