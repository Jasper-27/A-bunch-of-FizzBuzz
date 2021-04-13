// FizzBuzz in Java  https://github.com/Jasper-27

public class FizzBuzz{
    public static void main(String[] args) { 
        int fizz = 3; 
        int buzz = 5; 

        for (int i = 1; i < 100; i++){
            String out = ""; 

            if ( i % fizz == 0 ){ out += "Fizz"; }
            if ( i % buzz == 0 ){ out += "Buzz"; }

            if ( out == "" ) {
                System.out.println(i); 
            }else{
                System.out.println(out); 
            }  
        }
    }
}