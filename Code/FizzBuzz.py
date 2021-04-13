# FizzBuzz in Python3   https://github.com/Jasper-27

fizz = 3 
buzz = 5 

for i in range (1, 100): 
    out = ""

    if i % fizz == 0: 
        out += "Fizz"
    if i % buzz == 0: 
        out += "Buzz"
        
    if out == "": 
        print(i)
    else: 
        print(out)