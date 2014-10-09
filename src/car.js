function Car(make, model, year, color){
this.make = make;
this.model = model;
this.year = year;
this.color = color;
}

Car.prototype.currentOwner = "manufacturer";
Car.prototype.previousOwners = [];
Car.prototype.state = "off";
Car.prototype.passengers = [];

Car.prototype.start = function(newState){
	this.state = "on";
};

Car.prototype.off = function(newState){
	this.state = "off";
};

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;
};

Car.prototype.driveTo = function(destination){
	if(this.state === "on") {
		console.log("driving to " + destination);
	}
};

Car.prototype.park = function(){
	if(this.state === "off") {
		var parkState = "parked!!";
		// console.log(parkState);
		return parkState;
	}
};

Car.prototype.pick_up = function(friend){
	if(this.state === "on") {
	console.log("driving to pick up " + friend);
	this.passengers.push(friend);
	}
};

Car.prototype.drop_off = function(friend) {
	if(this.state === "on" && this.passengers.indexOf(friend) !== -1) {
		console.log("Dropping off " + friend);
		this.passengers.splice(this.passengers.indexOf(friend), 1);
	}
};


module.exports=Car;