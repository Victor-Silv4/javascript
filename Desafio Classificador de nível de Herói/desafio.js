let playerName = "victor";
let playerXp = 2000;
let playerLevel;

if(playerXp <= 1000){
    playerLevel = "Ferro";
}
else if(playerXp > 1000 && playerXp <= 2000){
    playerLevel = "Bronze";
}
else if(playerXp > 2000 && playerXp <= 5000){
    playerLevel = "Prata";
}
else if(playerXp > 5000 && playerXp <= 7000){
    playerLevel = "Ouro";
}
else if(playerXp > 7000 && playerXp <= 8000){
    playerLevel = "Platina";
}
else if(playerXp > 8000 && playerXp <= 9000){
    playerLevel = "Ascendente";
}
else if(playerXp > 9000 && playerXp <= 10000){
    playerLevel = "Imortal";
}
else{
    playerLevel = "Radiante";
}
    

console.log("O Herói de nome " + playerName + " está no nível de " + playerLevel);

