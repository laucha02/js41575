let numero = parseInt(prompt("Hola, ingresá un número entero del 1 al 100 y te diré características sobre este"));

if ((numero == 0) || (numero > 101)) {
    
    alert("Este número no se encuentra en el rango puesto anteriormente");

}

//PAR O IMPAR


if (numero % 2 == 0) {
    
    alert("Este número es par ya que " + numero + " dividido 2 da resto 0")

}

else {

    alert("Este número es impar ya que " + numero + " dividido 2 da resto 1")

}



//PRIMO O NO


if (numero == 1)
    alert("Este número no es primo");
else {

    for ( let i=2 ; i <= numero - 1 ; i++) 
  
        if(numero % i == 0) {
            alert("Este número no es primo");
            break
        }
        else if ( i == numero - 1)
            alert("Este número es primo");

}


//FACTORIAL

let factorial = 1;

for ( let i=numero ;  i>0 ; i-- )
    factorial = factorial * i;
    

  
alert("El factorial de " + numero + " es " + factorial);




