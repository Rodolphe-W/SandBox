console.log("Hello world");

const prenom = 'Rodolphe';
let year = 2023;
var year3 = 2024; // à ne plus utiliser
const dob = 2001;
const isAdmin = false;
const apprenants = ["Quentin","Flo"];
const sac = {livre : 'BD Tintin', trousse: 'stylo', skills: ["bagarre","moto","Jeux vidéos"]};

console.log(apprenants[0]);
console.log(sac.skills[0]);

apprenants.forEach(data=>{
    console.log(`Bonjour ${data}`);
})

console.log("Bonjour "+prenom);
console.log(`Bonjour ${prenom}`);
calculeAge();


function calculeAge(){
    const age = year - dob;
    console.log(`Voici ton âge : ${age} ans`);
}

const calculeAge2 = ()=>{
    const age = year - dob;

    // if(age > 18){
    //     console.log("Rentre bonhomme");
    // }else{
    //     console.log("Dehors mauviette");
    // }

    age > 18 ? console.log("Rentre bonhomme") : console.log("Dehors mauviette") // if ternaire

    console.log(`Voici ton âge : ${age} ans`);
}
calculeAge2();