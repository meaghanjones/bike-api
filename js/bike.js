function Bike() {
}


Bike.prototype.getBikesByLocation = function(searchCity) {

  $.get('https://bikeindex.org/api/v2/bikes_search/stolen?per_page=100&proximity=' + searchCity + '&proximity_square=100').then(function(response) {
    var trekCounter = 0;
    var specializedCounter = 0;
    var konaCounter = 0;
    var cannondaleCounter = 0;
    var giantCounter = 0;
    var miscCounter = 0;
    response.bikes.forEach(function(bike) {
      if (bike.manufacturer_name === "Trek"){
        trekCounter += 1;
      } else if (bike.manufacturer_name === "Specialized") {
        specializedCounter +=1;
      } else if (bike.manufacturer_name === "Kona") {
        konaCounter +=1;
      } else if (bike.manufacturer_name === "Cannondale") {
        cannondaleCounter +=1;
      } else if (bike.manufacturer_name === "Giant") {
        giantCounter +=1;
      } else {
        miscCounter +=1;
      }
    });
  $("#showBikes").append("There were " + trekCounter + " Trek bikes stolen" + "." +"<br>"
  + "There were " + specializedCounter + " Specialized bikes stolen" + ". " + "<br>"
  + "There were " + konaCounter + " Kona bikes stolen" + ". " + "<br>"
  + "There were " + cannondaleCounter + " Cannondale bikes stolen" + ". " + "<br>"
  + "There were " + giantCounter + " Giant bikes stolen" + ". " + "<br>"
  + "There were " + miscCounter + " other bikes stolen" + ". ");
}).fail(function(error){
      $('#showBikes').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
