// var input = process.argv;
// var type = input[2];
function Shape(type) {
	this.type = type;
	}    


Shape.prototype.thisType = function (){
	return "this is a " + this.type 
};

var triangle = new Shape("triangle")

var aShape =  triangle.thisType();

console.log (triangle instanceof Shape);

function Triangle (side1, side2, side3){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;	
}

Triangle.prototype.thisTriangle = function(){
	return "sides equal "+this.side1+ " " +this.side2+ " "+this.side3
}

var secTri = new Triangle (2,4,6)

var aTri = secTri.thisTriangle();

console.log(aShape + " " +aTri);

// //newSquare is an instance of Shape
// var newSquare = new Shape("square", 1)
// console.log(newSquare.constructor);
// console.log(newSquare.constructor === Object); 
// console.log(newSquare.get_Type);
// console.log("**************");
// console.log(newSquare.thisType());



 
function Square (side1){
	this.side1 = side1;
	this.side1 = side2;
	this.side1 = side3;
	this.side1 = side4;
}
