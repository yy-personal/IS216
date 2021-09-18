function foo(n1, n2) {   
    if(n1>4 && n1 < 10){
        n1 += 10;
    }
    
    if((n2%2)==0){
        n2 *= 2;
    }

    alert('num1: '+ n1 + ' | ' + 'num2: ' +n2);

    var return_value = n1 * n2;

    return return_value;
}
    