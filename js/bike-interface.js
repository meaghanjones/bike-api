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
    currentBikeObject.getBikesByColor();
  });
  $('#bikePhoto').click(function(){
    $('#showPhotos').text("");
    currentBikeObject.getPhotos();
  });
  var currentBikeObject1 = new Bike();
  var currentBikeObject2 = new Bike();
  $('#compareCities').click(function() {
    $('#showCompareCity1').text("");
    $('#showCompareCity2').text("");
    var city1 = $('#city1').val();
    var city2 = $('#city2').val();
     currentBikeObject1.totalBikesStolenCity1(city1);
     currentBikeObject2.totalBikesStolenCity2(city2);
  });
});
