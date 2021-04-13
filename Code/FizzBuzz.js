// FizzBuzz in JS   https://github.com/Jasper-27


var fizz = 3; var buzz = 5

for (var i = 1; i < 100; i++) {
    var out = "";

    if ( i % fizz == 0 ) { out += "Fizz" }
    if ( i % buzz == 0 ) { out += "Buzz" }

    if (out == "") { 
        console.log(i)
    }
    else {
        console.log(out);
    }
}
