let i;
function fizzbuzz(){
    for(i=1; i <=100; i++){
        if(i % 15 === 0){
            console.log('FizzBuzz');
        } else if(i % 3 == 0){}
        else if(i % 5 == 0){
            console.log('Buzz');
        } else{
            console.log(i);
        }
    }
}

fizzbuzz();