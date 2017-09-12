function Shape(type) {
	this.type = type;
	}    


Shape.prototype.thisType = function thisType (){
	return "this is a " + this.type 
};

var triangle = new Shape("triangle")

var aShape =  triangle.thisType();

console.log (triangle instanceof Shape);

function AnyShape (side1, side2, side3, side4){
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;	
	this.side4 = side4;
}

AnyShape.prototype.thisAnyShape = function thisAnyShape(){
	return "sides equal "+this.side1
}

var secTri = new AnyShape (2,4,6)

var aTri = secTri.thisAnyShape();

console.log(aShape + " " +aTri);

 
function Square (side1){
	this.side1 = side1;
}

var square = new Shape("square");
var aShape1 =  square.thisType();
var secSq = new AnyShape (7);
var aSq = secSq.thisAnyShape();
console.log(aShape1 + " " +aSq);
