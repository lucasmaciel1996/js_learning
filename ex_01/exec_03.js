//exe 03
/*Escreva um programa que cria uma string que representa uma grade 8x8, usando novas linhas para separar os caracteres. A cada posição da grade existe ou um espaço ou um caracter “#”, de forma que estes caracteres formem um tabuleiro de xadrez.*/
//autor maciel
var linha='';
var col='';
var size_l=0;
var size_c=0;

console.log('FOR');
for(size_l=0;size_l<4;size_l++)
{
  linha =(size_l%2==0)?'':'  ';

  for(size_c=0;size_c<8;size_c++)
  {
     if(size_c% 2==0){
        linha +='#'
     }else{
       linha +='@'
     }
  }
  console.log(linha);
}
console.log('WHILE');
//var
var cont01_c=0;
var cont01_l=0;

var linha_01='';
var col_01='';
while(cont01_c<4){
  linha_01 =(cont01_c%2==0)?'':' ';

  while ( cont01_l<8) {
     // linha_01+=(cont01_l %2==0)?'#':'@';
        if(cont01_l %2==0){
          linha_01+='#';
        }else{
          linha_01+='@';
        }
      cont01_l++;
  }
  console.log(linha_01);
  cont01_c++;
  cont01_l=0;
}
//var
var cont02_c=0;
var cont02_l=0;

var linha_02='';
var col_02='';
console.log('DO WHILE');
do{
   linha_02=(cont02_c %2==0)?'' :' ';
   do{
     /*
      if(cont02_l %2==0){
        linha_02+='#';
      }else{
        linha_02+='@';
      }*/
      linha_02+=(cont02_l%2==0)? '#': '@';
      cont02_l++;
   }while(cont02_l<8);
  console.log(linha_02);
  cont02_c++;
  cont02_l=0;
}while(cont02_c<8);
///maciel
