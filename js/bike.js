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

Bike.prototype.getBikesByColor = function() {

  $.get('https://bikeindex.org/api/v2/bikes_search/stolen?per_page=100&proximity=').then(function(response) {
    var blueCounter = 0;
    var whiteCounter = 0;
    var blackCounter = 0;
    var redCounter = 0;
    var silverCounter = 0;
    var greenCounter = 0;
    var otherCounter = 0;
    response.bikes.forEach(function(bike) {
      bike.frame_colors.forEach(function(frame_color){
        if (frame_color === "Blue"){
          blueCounter += 1;
        } else if (frame_color === "White") {
          whiteCounter +=1;
        } else if (frame_color === "Black") {
          blackCounter +=1;
        } else if (frame_color === "Red") {
          redCounter +=1;
        } else if (frame_color === "Silver") {
          silverCounter +=1;
        } else if (frame_color === "Green") {
          greenCounter +=1;
        } else {
          otherCounter +=1;
        }
      });
    });
  $("#showBikesByColor").append("There were " + blueCounter + '<span class="blue">' + " Blue " + "</span>" + "bikes stolen" + "."  + "<br>"
  + "There were " + whiteCounter + '<span class="white">' + " White " + '</span>' + "bikes stolen" + ". " + "<br>"
  + "There were " + blackCounter + " Black bikes stolen" + ". " + "<br>"
  + "There were " + redCounter + '<span class ="red">' + " Red " + '</span>' + " bikes stolen" + ". " + "<br>"
  + "There were " + silverCounter + '<span class="silver">' + " Silver " + '</span>' + "bikes stolen" + ". " + "<br>"
  + "There were " + greenCounter + '<span class="green">' + " Green" + '</span>' + "bikes stolen" + ". " + "<br>"
  + "There were " + otherCounter + " other bikes stolen" + ". ");
  }).fail(function(error){
      $('#showBikesByColor').text(error.responseJSON.message);
  });
};

Bike.prototype.getPhotos = function() {
  $.get('https://bikeindex.org/api/v2/bikes_search/stolen?per_page=100').then(function(response) {
    response.bikes.forEach(function(bike) {
      var photo = bike.thumb;
      if (photo != null) {
        $("#showPhotos").append("<img src=" + photo + ">");
      }
    });
    })
    .fail(function(error){
      $('#showPhotos').text(error.responseJSON.message);
    });
};

Bike.prototype.totalBikesStolenCity1 = function(city1) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/count?proximity=' + city1 + '&stolen_after=1438646400').then(function(response) {
    var bikeNumberCity1 = response.proximity
    $("#showCompareCity1").text("In "+ city1  + " there have been " + bikeNumberCity1 + " bikes stolen in the last year.");
  }).fail(function(error){
    $('#showCompareCity1').text(error.responseJSON.message);
  });
};

Bike.prototype.totalBikesStolenCity2 = function(city2) {
  $.get('https://bikeindex.org:443/api/v2/bikes_search/count?proximity=' + city2 + '&stolen_after=1438646400').then(function(response) {
    var bikeNumberCity2 = response.proximity
    $("#showCompareCity2").text("In "+ city2  + " there have been " + bikeNumberCity2 + " bikes stolen in the last year.");
  }).fail(function(error){
    $('#showCompareCity2').text(error.responseJSON.message);
  });
};

exports.bikeModule = Bike;
