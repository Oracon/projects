/*
var nome = "Bruno Moreira";
var idade = 31;
var idade2 = 12;
//alert("Bem vindo, " + nome);
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2)
console.log(nome);
console.log(idade);
console.log(nome.replace("Moreira", "H. Moreira"));
console.log(nome.toLowerCase());

//Lista
var lista = ["maça", "pera", "laranja"];

lista.push("uva");//adiciona
//lista.pop();//remove elemento

console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" | "));

//Dicionário
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas[1].nome);
console.log(frutas);


var idade = prompt("Qual a sua Idade?");

if (idade >= 18){
   console.log("Maior de Idade")
} else{
   console.log("Menor de Idade");
}

//WHILE
var count = 0;
while(count <= 5){
   console.log(count);
   count++;
}
console.log(count + " agora é >= 5");

//FOR
var count;
for (count=0; count <=5; count++){
   console.log(count);
}

var d = new Date();
console.log(d.getMonth()+1);//0 representa Janeiro
console.log(d.getDay());//0 representa o Domingo
console.log(d.getHours());
console.log(d.getMinutes());


function soma(n1, n2){
   return n1 + n2;
}
console.log(soma(5, 10));

function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome);
}
console.log(setReplace("Vai Japão", "Japão", "Brasil"));

*/

function botao(){
   console.log("Obg!")
   document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
   
}

function redirecionar(){
   //window.open("https://www.google.com.br");
   //window.location.href = "https://www.google.com.br"//abre na mesma página
}

function trocar(elemento){
   //document.getElementById("mousemove").innerHTML = "Passou o mouse";
   elemento.innerHTML = "Passou o mouse";
}

function voltar(elemento){
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
   elemento.innerHTML = "Passe o mouse aqui!";
}

function load(){
   //alert("Página carregada");
}

function funcaoChange(elemento){
   console.log(elemento.value)
}