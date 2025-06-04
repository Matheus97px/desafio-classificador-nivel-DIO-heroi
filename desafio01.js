// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

 
// ## Resolução


const heroi = [{nome: "Gandalf", xp: 12000},{nome: "Frodo", xp: 8000}, {nome: "Aragorn", xp: 5000},
    {nome: "Link", xp: 3000}, {nome: "Zelda", xp: 1500}, {nome: "Sam", xp: 7000},
     {nome: "Legolas", xp: 2000}, {nome: "Gimli", xp: 4000}, {nome: "Sauron", xp: 9000}, {nome: "Bilbo", xp: 6000},
    {nome: "Superman", xp: 10000}, {nome: "Batman", xp: 11000}, {nome: "Mulher Maravilha", xp: 7500},
    {nome: "Flash", xp: 8500}, {nome: "Aquaman", xp: 9500}, {nome: "Lanterna Verde", xp: 12000}];

 heroi.forEach((h) => {
     if (h.xp < 1000 && h.xp >= 0) {
         h.xp = "Ferro";
     } else if (h.xp >= 1001 && h.xp <= 2000){
         h.xp = "Bronze";
     } else if (h.xp >= 2001 && h.xp <= 5000){
         h.xp = "Prata";
     } else if (h.xp >= 5001 && h.xp <= 7000){
         h.xp = "Ouro";
     } else if (h.xp >=7001 && h.xp <= 8000) {
         h.xp = "Platina";
     } else if (h.xp >= 8001 && h.xp <= 9000) {
         h.xp = "Ascendente"
     } else if (h.xp >= 9001 && h.xp <= 10000) {
         h.xp = "Imortal"
     } else if (h.xp >= 10001) {
         h.xp = "Radiante";
     } else {
         h.xp = "XP invalido";
     }

 
      console.log(`O heroi de nome ${h.nome} esta no nivel de ${h.xp}`);
    
})

// Outra forma de resolver Sem o forEach

// for (let i = 0; i < heroi.length; i++) {

//     if (heroi[i].xp < 1000 && heroi[i].xp >= 0) {
//        heroi[i].xp = "Ferro";
//     } else if (heroi[i].xp >= 1001 && heroi[i].xp <= 2000){
//         heroi[i].xp = "Bronze";
//     } else if (heroi[i].xp >= 2001 && heroi[i].xp <= 5000){
//         heroi[i].xp = "Prata";
//     } else if (heroi[i].xp >= 5001 && heroi[i].xp <= 7000){
//         heroi[i].xp = "Ouro";
//     } else if (heroi[i].xp >=7001 && heroi[i].xp <= 8000) {
//         heroi[i].xp = "Platina";
//     } else if (heroi[i].xp >= 8001 && heroi[i].xp <= 9000) {
//         heroi[i].xp = "Ascendente"
//     } else if (heroi[i].xp >= 9001 && heroi[i].xp <= 10000) {
//         heroi[i].xp = "Imortal"
//     } else if (heroi[i].xp >= 10001) {
//         heroi[i].xp = "Radiante";
//     } else {
//         heroi[i].xp = "XP invalido";
//     }

//  }

//     for (let i = 0; i < heroi.length; i++) {
//         console.log(`O heroi ${heroi[i].nome} esta no nivel de ${heroi[i].xp}`);
//     }
