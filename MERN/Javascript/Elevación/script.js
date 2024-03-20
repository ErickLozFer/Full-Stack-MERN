console.log(hello); //Salida: undefined
var hello = 'world';


var needle = 'haystack';
test(); //Salida: magnet
function test() {
    var needle = 'magnet';
    console.log(needle);
}


var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); //Salida: super cool


var food = 'chicken';
console.log(food); //Salida: chicken
eat();
function eat() {
    food = 'half-chicken';
    console.log(food); //Salida: half-chicken
    var food = 'gone';
}


mean(); //Salida: TypeError
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


console.log(genre); //Salida: undefined
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); //Salida: rock
    var genre = "r&b";
    console.log(genre); //Salida: r&b
}
console.log(genre); //Salida: disco


dojo = "san jose";
console.log(dojo); //Salida: san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //Salida: seattle
    var dojo = "burbank";
    console.log(dojo); //Salida: burbank
}
console.log(dojo); //Salida: seattle


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now"; //Salida: error
    }
    return dojo;
}
