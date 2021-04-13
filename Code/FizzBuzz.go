// FizzBuzz in Golang  https://github.com/Jasper-27

package main

import "fmt"

var fizz int = 3
var buzz int = 5


func main() {

	for i := 1; i < 100; i++ {
		var out = ""

		if i % fizz == 0 { out += "Fizz" }
		if i % buzz == 0 { out += "Buzz" }

		if out == ""{
			fmt.Println(i)
		}else {
			fmt.Println(out)
		}
	}
}