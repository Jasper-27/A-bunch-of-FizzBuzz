// FizzBuzz in C  https://github.com/Jasper-27

#include <stdio.h>

int main(void) {
    int fizz = 3; 
    int buzz = 5; 

    for (int i = 1; i < 100; i++){
        int print = 0;

        if ( i % fizz == 0 ){
            printf("Fizz");
            print = 1;
        }
        if ( i % buzz == 0 ){ 
            printf("Buzz"); 
            print = 1; 
        }

        if ( print == 0 ){
            printf("%d", i);
        }

        printf("\n");
    }
    
    return 0; 
}