/*first script js pat 1, book eloquent JS
https://eloquentjavascript.net/*/
//autor maciel
//alert
alert('hello this a alert in js JS');
//confirm with action show console log result
if (confirm('Cliek in OK or CANCEL for action '))
{
  //click OK
  console.log(true);
}else{
  console.log(false);
}

//prompt with show console log result
var value =prompt('Hi please, enter a value here ','');
console.log(value);

var theNumber = Number(prompt('pick  a number ',''));
 switch (!isNaN(theNumber)) {
   case false:
       console.log('Not a Number');
     break;
    case true:
     console.log('Is a Number');
      break;
   default:

 }
