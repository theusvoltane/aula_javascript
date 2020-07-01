var nome = "Matheus Voltane Mendonça";
var idade = 26;
var idade2 = 10;
var frase = "USA é o melhor time do mundo";
//alert(nome + " tem " + idade + "anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade * idade2);
console.log(frase.toUpperCase());

var lista = ["banana", "pera", "laranja"];
console.log("  ");
console.log(lista[2]);
lista.push("uva");
console.log("  ");
console.log(lista[3]);
lista.pop();
console.log("  ");
console.log(lista);
console.log("  ");
console.log(lista.length);
console.log("  ");
console.log(lista.reverse());
console.log("  ");
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

console.log("  ");
var frutas = [{nome:"banana", cor:"Amarela"}, {nome:"uva", cor:"Roxa"}]; 
console.log(frutas);

console.log("  ");
var idade = prompt("Qual sua Idade ?");
if(idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade");
};

console.log("  ");
var count = 0;
while (count <= 5){
	console.log(count);
	count ++ ;
}

console.log("  ");
for (var count=0; count <= 5; count++){
	console.log(count);
};

console.log("  ");
var d = new Date();
console.log(d.getDay());
console.log(d.getMonth()+1);
console.log(d.getYear());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());