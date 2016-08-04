var Bike = require('./../js/bike.js').bikeModule;


$(document).ready(function() {
  var currentBikeObject = new Bike();
  $('#bikeCity').click(function(){
    $('#showBikes').text("");
    var city = $('#city').val();
    currentBikeObject.getBikesByLocation(city);
  });
  $('#bikeColor').click(function(){
    $('#showBikesByColor').text("");
    var color = $('#color').val();
    currentBikeObject.getBikesByColor(color);
  });
});
