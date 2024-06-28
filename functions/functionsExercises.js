//////////makeline function////////////
function makeLine(length){
    let line = "";
    for(let i = 0; i < length; i++){
       line += "#"; 
    }
    return line;
}
//console.log(makeLine(4));


/////////makeSquare function////////
function makeSquare(size){
    let squareShape = "";
    for(let i = 0; i < size; i++){
        squareShape += makeLine(size) + "\n";
        
    }
    return squareShape;
}
console.log(makeSquare(3));


function makeRectangle(width, height){
    let rectangle = "";
    for(i = 0; i < height; i++){
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle;
}
console.log(makeRectangle(3, 7));