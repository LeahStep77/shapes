function Shape(type, sides) {
	this.type = type,
	args = Array.prototype.slice.call(arguments, 1);
  	this.sides = args.join(" X ");
	}    


Shape.prototype.thisType = function thisType (){
	return "this is a " + this.type + " its sides measure " + this.sides 
};

var triangle = new Shape("triangle", 7, 10, 20);
var aShape =  triangle.thisType();
console.log(aShape);
console.log (triangle instanceof Shape);

var square = new Shape("square", 8, 8, 8, 8);
var aSq = square.thisType();
console.log(aSq);
console.log(square instanceof Shape);

var pentagon = new Shape("pentagon", 1,2,3,4,5);
var aPen = pentagon.thisType();
console.log(aPen);
console.log(pentagon instanceof Shape);