//exec01
/*Escreva um programa que imprima (usando console.log()) todos os números de 1 a 100, exceto que, para números divisíveis por 3, ele imprima Fizz ao invés do número, e para números divisíveis por 5 (e não 3), ele imprima Buzz.
Quando você tiver o programa funcionando, modifique-o para imprimir FizzBuzz para números que são divisíveis por ambos os números 3 e 5.
(Isto é na verdade uma pergunta de entrevista usada para eliminar uma porcentagem significativa de candidatos programadores. Então, se você resolvê-la, você está autorizado de se sentir bem consigo mesmo).*/
for(cont =1; cont<=100;cont++)
{

   if(cont % 3 == 0 && cont % 5== 0)
   {
     console.log('FizzBuzz');
   }
   else if(cont %3 == 0)
   {
     console.log('Fizz');
   }
   else if(cont %5 == 0)
   {
    console.log('Buzz');
   }else{
     console.log(cont);
   }

}
console.log('DO WHILE');
var cont01=1;
do{
   if(cont01 %5 ==0 && cont01%3 ==0)
   {
     console.log('FizzBuzz');
   }
   else if(cont01 %3==0)
   {
     console.log('Fizz');
   }
   else if(cont01 %5==0)
   {
    console.log('Buzz');
   }else{
     console.log(cont01);
   }
   cont01++;
}while(cont01<=100);

var cont02=1;
console.log('WHILE');
while(cont02 <=100){
  if( cont02 %3 ==0 && cont02% 5 ==0)
  {
    console.log('FizzBuzz');
  }
  else if(cont02 %3 ==0)
  {
    console.log('Fizz');
  }

  else if(cont02 %5 ==0)
  {
    console.log('Buzz');
  }else{
    console.log(cont02);
  }
  cont02++;
}
