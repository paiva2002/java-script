//declarando variaveis
let nome = 'lucas';
let idade = 25;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionado = null;
//criando objeto
let pessoas = {
    nome: 'lucas',
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de souza'


};
//chama do conteúdo objeto no console
console.log(pessoas);

//Arrays conjuntos de dados aceita tipo
//true, string.. 
let familia = [true,45,'lucas',17];
console.log(familia.length);  
console.log(familia[0]);
//Imprimindo o nome de um amigo no console
let nomeDeAmigo =['irineu De Galileu Estronda'];
console.log(nomeDeAmigo[0]);

//criando uma função --> verbo + Substantivo
function resertCor(){
    corSite="";
};
//pegando o valor do site
console.log(corSite);
//chamando a função resertCor
resertCor();
//verificando o trabalho da função resertCor
console.log(corSite);

//Usando a função para modifica a cor do site
//criando uma função --> verbo + Substantivo
function modificaCor(cor){
    corSite="cor";
};
//pegando o valor do site
console.log(corSite);
//chamando a função modificaCor
modificaCor(vermelho);
//verificando o trabalho da função modificaCor
console.log(corSite);

//usando função para manipula cor
let corSite = "azul";
function manipulaCor(cor, tonalidade){
    corSite= cor + tonalidade;
};
//pegando o valor do site
console.log(corSite);
//chamando a função manipulaCor
manipulaCor("verde","claro");
//verificando o trabalho da função manipulaCor
console.log(corSite);

//*******EXISTE DOIS TIPOS DE FUNÇÃO*********//
//Realizar uma tarefa, e não devolve nada ---> tipo void
function dizerNome(){
    console.log('lucas');
}
//chama função
dizerNome();

//######## E do tipo -> return ########//
function multiplicarPorDois(valor){
    return valor * 2;
}
//mostrando resultado no console
console.log(multiplicarPorDois(5));

//&&&&&&& OPERADORES &&&&&&&&//

//aritmeticos(matematica) +  -  / *  **
//atribuição =
//comparação restrita( === ) não restrita ( == )
//lógicos
//se tem um cliente e esse cliente tiver 100 pontos ---> tipo premium
let pontos= 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//operadores lógicos e (&&)
//retorna TRUE se e somente se operados
//forem TREU
console.log(true && true); //---> = true
console.log(false && true); //---> = false
// operador logico ou (||)
//se um ou outro satifaz a condição e verdadeiro treu
// operador de negação (!)

//bitWise

//****** se a hora estiver enntre 6:00 até 12:00 === bo dia/
//se estiver entre 12:00 até 18:00 === boa tarde
//caso contrario === boa noite
//If e Else
let hora = 10;
if(hora > 6 && hora < 12){
    //codigo a ser executado
    console.log("bom dia");
}
else if(hora > 12 && hora < 18){
    //codigo a ser executado
    console.log("boa tarde");
}
else{
    //codigo a ser executado
    console.log("boa noite");
}

/*trabalhanod com switch, case */
let permissao;//comum,gerente,diretor
permissao = 'comum';
switch(permissao){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;

    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log('usuario nao reconhecido!!');
}
/*Loops de repitição que são compostos
por For, while, Do While, for in, for of
*/

//for-in

const pesssoa = {
    nome: 'lucas',
    idade: 25
};

for(let chave in pessoa){
    console.log(chave,pessoa['nome']);
}

const cores = ['vermelho','azul','verde'];

for(let indice in cores){
    console.log(indice, cores[indice])
}
//escreva uma função que usa 2 numeros e retorna 
//o maior entre eles

let valorMaior = max(10,10);
console.log(valorMaior);

function max(numero1,numero2){
    if(numero1 > numero2)
    return numero1;
    else return numero2;
}

//utilizando um construtor
const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function(){
        console.log("fazendo ligação....");
    }
}
const novoObjeto = Object.assign({bateria: 5000
},celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);

//utilizando a função math
Math.random();//cria numero aleátorios

Math.max(3,6,8,10); //imprimi max valor = 10 nesse caso

Math.min(5,8,4,8);//minimo valor nesse caso 4

//aprendendo metodos de uma strng
//tipos primitivo
const mensagem1 = 'minha primeira mensagem';
//tipo objeto
const outraMesangem = new String('bom dia');

//Javascript Aula 39 - Template Literal
const mensagem = 'Hello isso é minha\n primeira mensagem';

//object{}
//boolean true,false
//string '',""
//Template ''

const nome1 = 'rafael';

const email = 'Hello, boenos dias ${nome}';
  
//tipo date
const data1 = new Date();
const date2 = new Date('March 06 2019 09:30');
const date3 = new Date(2019,02,06,9,30);

date3.setUTCFullYear(2030);



