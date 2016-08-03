function Bike() {
}

Bike.prototype.getBikesByColor = function() {
  console.log("Hi! I'm a bike object");
};

exports.bikeModule = Bike;
