//Grace Musuvaho :) 

/* 
Activité : gestion des contacts
*/


const carole = new Contact("Lévisse", "Carole");
const melodie = new Contact("Nelsonne", "Mélodie");
const tabContact = [carole, melodie];
const tabOption = ["Quitter", "Lister les contacts", "Ajouter un contact"];

// Test1

/**
 * options -Affiche et demande le choix a l'utilisateur
 * @returns {Number } choix de l'utilisateur
 */
function options() {
    // Choix disponible
    console.log("1 : " + tabOption[1]);
    console.log("2 : " + tabOption[2]);
    console.log("0 : " + tabOption[0]);

    let option = Number (prompt ("Choisissez une option"));
	return option;
};


//Lister les contacts
function lister(){
	console.log("Voici la liste de tous vos contacts :");
	for (const personne of tabContact){
		console.log(personne.decrire());
	};
};


//Ajouter un contach au tableau
function ajouter(){
	const nom = prompt("Entrez le nom du contact");
	const prenom = prompt("Entrez le prenom du contact");
	const newContact = new Contact(nom, prenom);
	tabContact.push(newContact);

	console.log("Le contact : " + nom + " " + prenom +  " a été ajouté");
}



console.log("Bienvenue dans le gestionnaire des contacts !");

let choix = options();

while(choix != 0){

	switch (choix) {
		case 1 : lister();
				break;

		case 2 : ajouter();
				break;

		default : console.log("\n Choix incorrect, veuillez choisir : 1 (pour afficher la liste des contacts), 2 (pour ajouter un contact) ou 0 (pour quitter le proramme) ");
					break;
	};

	choix = options();
}

console.log("Merci d'avoir utilisé le programme. Au revoir !");