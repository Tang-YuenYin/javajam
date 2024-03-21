var instruction=
"1: Brazil Cerrado = RM 42/pack\n" 
+"2: Vanguard Blend = RM 42/pack\n"
+"3: Organic Marcala = RM 56/pack\n"
+"4: Taster Pack Trio = RM 69/pack";

var input=prompt("Enter Coffee Bean ID (1-4)(0 to stop): \n"+instruction);

while(input!=0){
  var price;
  if(input>=1 &&input<=4)
{
  id=input;
  if (input==1)
    price=42;
  else if (input==2)
    price=42
  else if(input==3)
    price=56;
  else
    price=69;

    var amount=prompt("Enter number of pack of coffee beans that you want to purchase: ");

    var result=parseInt(amount)*parseInt(price);
    
    alert("Total cost for "+amount+" pack(s) of coffee is RM "+result);
    
}

else
{
  alert("Coffee Bean ID must be between 1 and 4 or 0 to stop ");
}


input=prompt("Enter Coffee Bean ID (1-4)(0 to stop): \n"+instruction);
7
}
