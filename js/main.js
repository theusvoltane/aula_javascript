/*
var nome = "Matheus Voltane Mendonça";
var idade = 26;
var idade2 = 10;
var frase = "USA é o melhor time do mundo";
alert(nome + " tem " + idade + "anos");
alert(idade + idade2);
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

console.log("");
function soma(n1,n2){
	return n1+n2;
}
alert(soma(5,10));

console.log("");
function setReplece(frase,nome,novo_nome){
	return frase.replace(nome, novo_nome);
}

alert(setReplece("Vai Argentina","Argentina","Brasil"));

console.log("");
function validaIdade(idade){
	var validar;
	if(idade>=18){
		validar = true;
	}else{
		validar = false;
	}
	return validar;
}

var idade = prompt("Quantos anos você tem?");
console.log(validaIdade(idade));
*/

function clicou(){
	document.getElementById("agradecimento").innerHTML="<b>Obrigado Por Clicar<b>";
	//alert("Obrigado por Clicar");
}

function redirecionar(){
	window.open("https://web.digitalinnovation.one/home");
	//window.location.href = "https://github.com/";
}

function trocar(element){
	document.getElementById("mousemove").innerHTML = "Obrigado per passar o mouse";
	//alert("trocar texto");
}

function voltar(element){
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
	//alert("trocar texto");
}

function load(){
	alert("pagina carregada");
}

function funcaoChange(element){
	console.log(element.value);
}