const bicycle = {
	gear: 2,
	setGear(newGear) {
		'use strict';
		this.gear = newGear
	}
};
bicycle.setGear(5)
console.log(bicycle.gear)