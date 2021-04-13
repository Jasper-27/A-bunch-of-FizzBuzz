// FizzBuzz in C++  https://github.com/Jasper-27

#include <iostream>
#include <string> 

using namespace std; 

int main(){
    int fizz = 3; 
    int buzz = 4;

    for (int i = 1; i < 100; i++){
        string out = "";

        if ( i % fizz == 0 ){ out += "Fizz"; }
        if ( i % buzz == 0 ){ out += "Buzz"; }

        if (out == ""){
            cout << i << endl; 
        }else{
            cout << out << endl; 
        }
    }
    return 0; 
}