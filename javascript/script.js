var mensagem = "Olá Mundo!";
alert(mensagem);

var a = 2;
var b = 3;
var c = "Olá";
var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

alert (soma);
alert (sub);
alert (mult);
alert (div);

if (c%2==0) {
	alert ("Número Par!");
}
else if (c%2==1) {
	alert ("Número Ímpar!");
}
else {
	alert ("Número Inválido!");
} 

// While: 
var i = 0;
while (i<3){
	alert (i);
	i+=1;
}

// for
var j; 
for (j=0;j<3;j++){
	alert(j);
}

// Array
var lista = ["a", "b", "c"];
alert (lista[0]);

for (i in lista){
	alert (lista [i]);
	//alert (i); pegar o indice da lista.
}