//Traditional way to create object
var SpaceShuttle = function(targetPlanet) {
	this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle('Jupiter')
console.log(zeus.targetPlanet)


//Another way to create object using class syntax
function makeClass() {
	class Vege {
		constructor(name) {
			this.name = name;
		}
	}
	return Vege;
};

const Vegetable = makeClass();
const c = new Vegetable('carrot');
console.log(c.name)


