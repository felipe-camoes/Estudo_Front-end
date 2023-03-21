// TIPOS DE VARIAVEIS

let nome = "joao";
let idade = 25;
let bool = true;
let nulo = null; // VALOR INEXISTENTE
const a = 10; // COSNTANTE

// ALTERAÇAO DO TIPO DA VARIAVEL
parseInt(variavel) // VARIAVEL PARA INTEIRO
parseFloat(variavel) // VARIAVEL PARA PONTO FLUTUANTE

// CONDICIONAIS 

// IF ELSE
if (condiçao verdadeira){

}else{

} 

// OPERADOR TERNARIO

let a = variavel > valor ? atribuiverdadeiro : atribuifalso

//ELSE IF
if {

}
else if {

}

// SWITCH CASE

variavel = 1;
switch (variavel) {
    case 1:
    console.log("FAÇA");
    break;
    case 2:
        console.log("FAÇA");
    break;
    default:
        console.log("CONDIÇAO FALSA");
    break;
}

// OPERADORES LOGICOS
|| // OU
&& // E
! // NOT 
== //IGUAL
=== // IGUAL PELO TIPO E VALOR
!== // DIFERENTE


//OPERADORES MATEMATICOS 
+ // MAIS
- // MENOS
/ //DIVISAO
* // MULTIPLICAÇÃO
% // RESTO

// SAIDAS

prompt("") // SAIDA E ENTRADA PELO PROMPT
console.log("") // SAIDA PELO CONSOLE
alert("") // SAIDA PELO ALERT

// LAÇOS

while(condicao){
    break;
    continue;
}

for(let declaracaoVariavel = 0 ; condicaoVariavel < 3 ; incementoVariavel++){}

do{
    console.log("Imprime enquanto o while for verdadeiro")
    cont++
} while (cont < 15)

// ITERAÇAO 

for (let variavel in array){} // ITERAR SOBRE ARRAY
for (let variavel of array){} // VARIAVEL ATRIBUI O VALOR DO ARRAY

// ACESSO DE STRING
string.lastIndexOf(string) // BUSCA A ULTIMA OCORRENCIA DE STRING.
string.split(separador): // SEPARA E ACRESCENTA NA LISTA.
string.toLowerCase() // CONVERTA PARA MINUSCULA
string.toUpperCase() // CONVERTE PARA MAIUSCULA.

// DECLARACOES DE ARRAYS

let lista1 = new Array() // DECLARAÇÃO DE LISTA VAZIA
let lista2 = new Array(1, 2, 3, 4, 5) // DECLARAÇÃO DE LISTA COM AS VARIAVEIS
let lista3 = [1,1,1,1] // DECLARAÇÃO DE LISTA 

// ACESSO DE ARRAYS

lista.length // QUANTOS INDICES HA NA LISTA
list a[0] // ACESSO AO INDICE DA LISTA
lista.push(variavel) // ADICIONA UMA VARIAVEL AO FINAL DA LISTA
lista.pop() // REMOVE A ULTIMA VARIAVEL 
lista.unshift(variavel)// ADICIONA UMA VARIAVEL AO INICIO DA LISTA
lista.shift() // REMOVE A PRIMEIRA VARIAVEL 
lista.indexOf(variavel)// RETORVA O VALOR DO INDICE DA VARIAVEL
lista.lastIndexOf(item, início) // RETORNA O ULTIMO VALOR DA LISTA
lista.splice(indice,quantasVezes,variaveis) // ADICIONA ITENS A PARTIR DO INDICE
lista.splice(indice,quantasVezes) // REMOVE ITENS APARTIR DO INDICE
let copia = lista.slice(indiceInicio,indiceFim) // COPIA DE ARRAY
lista.reverse() // INVERTE A LISTA
lista.concat(LISTA1,LISTA2) // JUNTA DUAS LISTAS
lista.sort() // ORDENA OS ELEMNTOS
lista.toString() // RETORNA A LISTA EM STRING
lista.map() // RETERNA UMA LISTA PODENDO USAR FUNCAO COMO PARAMETRO

lista2.forEach((array) , index , array // nao feito

// CONCATENAÇÃO

console.log("je" + "je") // CONCATENAÇÃO DE STRING
console.log(`texto ${varivael}`) // VARIAVEL DENTRO DA STRING
console.log(typeof variavel) // TIPO DA VARIAVEL
console.log(1 + " JEJEJE")

// OBJETO
 
class pessoa = {
//PARAMETRO: ATRIBUTO
    nome: "procto",
    idade: 25,
    outro: null,
}

// INSTANCIAÇAO DE OBJETO

const cliente = new pessoa();

// ACESSANDO ATRIBUTOS DO OBJETO
cliente.nome = "jose";
cliente.idade = 24;

// FUNÇÃO

function funcao(a,b){
    var i = a
    var ii = b
    return soma = i + ii
}

let i = new function()
let i = new function("a","b","return c = a + b;") // FUNCAO EM UMA LINHA
var areaTri = function(b,h) { return (b*h)/2; };

// ARROW FUNCTION

let soma = (a, b) => { return a + b };

// DOM

documentElement	// CAPTURA UM ELEMENTO DO HTML RAIZ
getElementById(id)	// RETORNA O ELEMENTO COM O ID
getElementsByName(name) // RETORNA O ELEMENTO DO NOME
getElementsByClassName(name) // RETORNA O ELEMENTO DA CLASSE
querySelector(seletor css) // RETORNA O ELEMENTO DO SELETOR
querySelectorAll(seletor) // RETORNA TODOOS OS ELEMENTOS DO SELETOR
elemento.style.propriedade = "valor" // MUDA O ESTILO
createElement	// CRIA UM ELEMENTO NA PIGINA.
createAttribute	// CRIA UM NODO ATRIBUTO
createTextNode	/// CRIA UM NODO TEXTO NA PAGINA
getElementsByTagName // RETORNA UM ARRAY COM TODOS OS NOMES
appendChild	// INSERE UM NOVO ELEMNTO FILHO
removeChild	// REMOVE UM ELEMNTO FILHO
parentNode // RETORNA O NODO PAI DE UM NODO

// PROPIEDADE DAS TAGS

.propriedade // value,checked
.innerHTML

// EVENTOS

click // QUANDO CLICAMOS NO ELEMENTO
mousedown // QUANDO CLICAMOS QUALQUER BOTAO
mouseup // QUANDO LIBERAMOS O BOTAO APOS CLICARMOS
mouseover // QUANDO COLOCAMOS O MOUSE SOBRE UM ELEMENTO
mouseout // QUANDO TIRAMOS O MOUSE DE UM ELEMENTO
mousemove // QUANDO MOVEMOS O PONTEIRO DO MOUSE

// EVENTOS DO TECLADO

keydown // QUANDO PRESSIONARMOS UMA TECLA
keypress // QUANDO PRESSIONARMOS UMA TECLA QUE RESULTE EM UM CARACTERE
keyup // QUANDO SOLTARMOS A TECLA PRESSIONADA

load // CARREGAMENTO COMPLETO DO CONTEUDO
unload // FECHAMENTO DE UM DOCUMENTO
focus // OCORRE QUANDO A JANELA OU ELEMENTO RECEBE O FOCO
change // OCORRE QUANDO UM ELEMENTO DE FORMULÁRIO PERDE O FOCO APÓS TER SIDO ALTERADO SEU CONTEÚDO
select // OCORRE QUANDO SELECIONAMOS UM TEXTO EM ELEMENTOS DE FORMULARIO
submit // OCORRE QUANDO CLICAMOS NO BOTAO SUBMIT











