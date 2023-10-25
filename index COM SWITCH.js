let nome = "kojima"
let xp = 10001
let rank = "Neutro"


if (xp < 1000)
{
rank = "Ferro"
}

//Se XP for entre 1.001 e 2.000 = Bronze
else if ( xp >= 1001 && xp <= 2000)
{
    rank = "Bronze"
}
//Se XP for entre 2.001 e 5.000 = Prata
else if ( xp >= 2001 && xp <= 5000)
{
    rank = "Prata"
}
//Se XP for entre 6.001 e 7.000 = Ouro
else if ( xp >= 6001 && xp <= 7000)
{
    rank = "Ouro"
}
//Se XP for entre 7.001 e 8.000 = Platina
else if ( xp >= 7001 && xp <= 8000)
{
    rank = "Platina"
}

//Se XP for entre 8.001 e 9.000 = Ascendente
else if ( xp >= 8001 && xp <= 9000)
{
    rank = "Ascendente"
}

//Se XP for entre 9.001 e 10.000= Imortal
else if ( xp >= 9001 && xp <= 10000)
{
    rank = "Imortal"
}
//Se XP for maior ou igual a 10.001 = Radiante
else   
{
    rank = "Radiante"
}

console.log("O Herói de nome " + nome ,"está no nível de " + rank)