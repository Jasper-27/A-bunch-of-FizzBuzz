# FizzBuzz in ShellScript       https://github.com/Jasper-27

#!/bin/sh

fizz=3 
buzz=5

for i in {1..100} ; do
    out=""
    if [[ $i%$fizz -eq 0 ]] ; then 
        out+="Fizz"
    fi 

    if [[ $i%$buzz -eq 0 ]] ; then 
        out+="Buzz"
    fi 

    if [[ $out == "" ]] ; then 
        echo "$i"
    else 
        echo "$out"
    fi

done


