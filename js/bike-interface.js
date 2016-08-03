var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#bikeCity').click(function(){
    $('#showBikes').text("");
    var city = $('#city').val();
    // var color = $('#color').val(); placeholder for possible future functionality to search by color.
    currentBikeObject.getBikesByLocation(city);
  });
});
