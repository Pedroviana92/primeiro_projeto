const json = require('./json')


let pets = [
    {
        nome: "Yoshi",
        tipo: "cachorro",
        raca: "Akita inu",
        idade: 6,
        genero: "Masculino",
        vacinado: true
    },
    {
        nome: "Pituco",
        tipo: "pássaro",
        raca: "calopsita",
        idade: 3,
        genero: "Feminino",
        vacinado: false

    },
    {
    
        nome: "kika",
        tipo: "cachorro",
        raca: "pinscher",
        idade: 12,
        genero: "Feminino",
        vacinado: true
      
    }
]

function listarPets() {
    for(let i=0; i<pets.length; i++){
        console.log("Nome: " + pets[i].nome)
        console.log("Tipo: " + pets[i].tipo)
    }
}
function validaDados(novoPet) {
    return (novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero && novoPet.vacinado)
}
function cadastrarPet(novoPet) {
    if(typeof novoPet == "object"){
        if(validaDados(novoPet)){
            pets.push(novoPet)

        }
        else {
            console.log("O objeto não tem todas as propriedas necessárias")
        }  
        
    } else {
        console.log("Não é um objeto! Insira um objeto por favor!")
    }
    console.log(pets)
     

}
novoPet = {
    
    nome: "kika",
    tipo: "cachorro",
    raca: "pinscher",
    idade: 12,
    genero: "Feminino"
  
}

//Desafio: Verificar animais vacinados ou se precisam de vacina (recebendo um pet da lista)
//Exibir uma listagem de animais vacinados e não vacinados


function estaVacinado(nomePet) {
    for(let i=0; i<pets.length; i++) {
        if(nomePet == pets[i].nome){
            if(pets[i].vacinado){
                return console.log("O seu Pet está vacinado!")
            }
            else {
                return console.log("O seu Pet não está vacinado!")
            }
        }  
    }
    return console.log("Seu Pet não está cadastrado")
}
// estaVacinado("Pituco")

function listaVacinados(pets){
    let vacinados = []
    let nVacinados = []
    for(let i=0; i<pets.length; i++) {
        if(pets[i].vacinado){
            vacinados.push(pets[i].nome)
        }
        else {
            nVacinados.push(pets[i].nome)
        }
    }
    
    console.log("Os pets vacinados são: " + vacinados + "." )
    console.log("Os pets que precisam de vacina são: " + nVacinados + ".")
}
// listaVacinados(pets)

function servicos(Pet, servico) {
    return servico(Pet)
}
function banho(Pet) {
    return (Pet.nome + " " + "está tomando banho")
}
function tosa(Pet) {
    return (Pet.nome + " " + "está tosando")
}
// console.log(servicos(pets[1], tosa))
// console.log(json)

function addJasonPet(lista, json) {
    let jsonPets = JSON.parse(json)
    lista.push(...jsonPets)
    return lista
    
}

// addJasonPet(pets, json)
// console.log(pets)
//Desafio iremos passar uma frase para vocês e terão que alterar uma determinada palavra por outra
// a ideia é que façam com arrow function, resolvido por apenas uma linha e com return implícito
// sem utilizar a palavra return dentro da função
//frase = "gosto muito de programar em VBA" (frase completa, palavra removida, palavra nova)


let frase = "gosto muito de programar em VBA"
let trocarFrase = (frase, remove, adiciona) => frase.replace(remove, adiciona)
let novaFrase = trocarFrase( frase, "VBA", "JavaScript")
//console.log(novaFrase)

let numerosPares = [2, 4 , 6, 8 , 10]
let numerosParesDobro = numerosPares.map(function(valor) {
    return valor *2 
})
console.log(numerosParesDobro)



