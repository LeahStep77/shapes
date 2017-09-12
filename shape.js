function Shape(type, sides) {
	this.type = type,
	args = Array.prototype.slice.call(arguments, 1);
  	this.sides = args.join(" X ");
	}    


Shape.prototype.thisType = function thisType (){
	return "this is a " + this.type + "it measures " + this.sides 
};

var triangle = new Shape("triangle", 7, 10, 20);
var aShape =  triangle.thisType();
console.log(aShape);
console.log (triangle instanceof Shape);

var square = new Shape("square", 8, 8, 8, 8);
var aSq = square.thisType();
console.log(aSq);
console.log(square instanceof Shape);


// function AnyShape (sides) {
//   var args = Array.prototype.slice.call(arguments);
//   this.sides = args.join(" X ");
// }


// AnyShape.prototype.thisAnyShape = function thisAnyShape(){
// 	return "sides equal "+this.sides
// }

// var secTri = new AnyShape (2,4,6)

// var aTri = secTri.thisAnyShape();

// console.log(aShape + " " +aTri);

 
// function Square (side1){
// 	this.side1 = side1;
// }

// var square = new Shape("square");
// var aShape1 =  square.thisType();
// var secSq = new AnyShape (7, 7, 7, 7);
// var aSq = secSq.thisAnyShape();
// console.log(aShape1 + " " +aSq);

////////////////////////////////
// function afunction (sep) {
//   var args = Array.prototype.slice.call(arguments);
//   return args.join(" X ");
// }
// console.log(afunction("apple","pineapple","avacado"));


