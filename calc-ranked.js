let usuario = "Van-Dame"
var vitoria = 100
var derrota = 25
let rank = saldoVitoria (vitoria,derrota)

//vitoria = prompt ("Digite quantidade de vitórias: ")
//derrota = prompt ("Digite quantidade de derrotas: ")

function saldoVitoria(vitoria,derrota){
    return vitoria - derrota
}


if (rank <= 10){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rank Ferro")
}else if (rank >= 11 && rank <= 20){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rank Bronze")
}else if (rank >= 21 && rank <= 50){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rank Prata")
}else if (rank >= 51 && rank <= 80){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rankk Ouro")
}else if (rank >= 81 && rank <= 90){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rank Diamante")
}else if (rank >= 91 && rank <= 100){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rank Lendário")
}else if (rank >= 101){
    console.log("O Herói "+usuario+" Tem saldo de "+rank+" vitórias e está no Rank Imortal")
}
