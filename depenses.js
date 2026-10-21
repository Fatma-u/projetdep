const nom = 'Awa'; // Type : string
const budget = 30000//Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA


const transport=Number(transportTexte); // Type : number ; unité : FCFA
const alimentation=Number(alimentationTexte);// Type : number ; unité : FCFA
const loisirs=Number(loisirsTexte);// Type : number ; unité : FCFA

const totalDepenses = transport + alimentation + loisirs; // Type : number ; unité : FCFA
const budgetRestant = budget - totalDepenses; // Type : number ; unité : FCFA
const budgetRespected = budgetRestant >=0; // Type : number ; unité : FCFA

console.log(`Le rapport de dépenses de ${nom}:`);
console.log(`Le budget total est de ${budget}FCFA`);
console.log(`Le transport est de ${transport}FCFA`);
console.log(`L'alimentation est de ${alimentation}FCFA`);
console.log(`les dépenses pour loisirs sont de ${loisirs}FCFA`);
console.log(`Le total de ses dépendes ${totalDepenses}FCFA`);
console.log(`le reste est de ${budgetRestant}FCFA`);
console.log(`L'état du budget est ${budgetRespected}`);




