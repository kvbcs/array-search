const heroes = [
	{
		name: "Luke Skywalker",
		side: "Lumineux",
		planet: "Tatooine",
		species: "Humain",
		lightsaberColor: "Bleu",
		masteryOfForce: "Avancé",
	},
	{
		name: "Darth Vader",
		side: "Obscur",
		planet: "Tatooine",
		species: "Humain",
		lightsaberColor: "Rouge",
		masteryOfForce: "Maîtrise totale",
	},
	{
		name: "Yoda",
		side: "Lumineux",
		planet: "Dagobah",
		species: "Yoda's Species",
		lightsaberColor: "Vert",
		masteryOfForce: "Légendaire",
	},
	{
		name: "Han Solo",
		side: "Lumineux",
		planet: "Corellia",
		species: "Humain",
		lightsaberColor: "Aucun",
		masteryOfForce: "Aucun",
	},
	{
		name: "Leia Organa",
		side: "Lumineux",
		planet: "Alderaan",
		species: "Humain",
		lightsaberColor: "Bleu",
		masteryOfForce: "Débutante",
	},
	{
		name: "Emperor Palpatine",
		side: "Obscur",
		planet: "Naboo",
		species: "Humain",
		lightsaberColor: "Rouge",
		masteryOfForce: "Maîtrise totale",
	},
	{
		name: "Chewbacca",
		side: "Lumineux",
		planet: "Kashyyyk",
		species: "Wookiee",
		lightsaberColor: "Aucun",
		masteryOfForce: "Aucun",
	},
	{
		name: "Obi-Wan Kenobi",
		side: "Lumineux",
		planet: "Stewjon",
		species: "Humain",
		lightsaberColor: "Bleu",
		masteryOfForce: "Avancé",
	},
	{
		name: "R2-D2",
		side: "Lumineux",
		planet: "Naboo",
		species: "Droid",
		lightsaberColor: "Aucun",
		masteryOfForce: "Aucun",
	},
	{
		name: "C-3PO",
		side: "Lumineux",
		planet: "Tatooine",
		species: "Droid",
		lightsaberColor: "Aucun",
		masteryOfForce: "Aucun",
	},
];

//Challenge 1
const findBlueLight = heroes.find(
	(hero) => hero.side === "Lumineux" && hero.lightsaberColor === "Bleu"
);
console.log("Trouve premier Lumineux/sabre bleu", findBlueLight);

//Challenge 2
const findKenobi = heroes.find((hero) => hero.name.includes("Kenobi"));
console.log("Trouve dernier nom Kenobi", findKenobi);

//Challenge 3
const findLegendary = heroes.findIndex(
	(hero) => hero.masteryOfForce === "Légendaire" && hero.planet === "Dagobah"
);
console.log("Trouve index du premier Légendaire/Dagobah", findLegendary);

//Challenge 4
const findLast = heroes.findLastIndex(
	(hero) => hero.planet === "Tatooine" && hero.lightsaberColor === "Rouge"
);
console.log("Trouve index du dernier de Tatooine/sabre rouge", findLast);

//Challenge 5
const findYoda = heroes.findIndex((hero) => hero.name === "Yoda");
console.log("Trouve index de Yoda", findYoda);

//Challenge 6
const indexYoda = heroes.findLastIndex(
	(hero) => hero.lightsaberColor === "Vert"
);
console.log("Trouve dernier index sabre vert", indexYoda);

//Challenge 7
const findWookiee = heroes.find(
	(hero) => hero.side !== "Lumineux" && hero.species === "Wookiee"
);
console.log("Trouve Wookiee", findWookiee);
//retourne undefined car il n'y en a pas

//Challenge 8
const findSolo = heroes.findLastIndex((hero) => hero.name.includes("Solo"));
console.log("Trouve dernier Solo", findSolo);

//Challenge 9
const firstNoForce = heroes.find((hero) => hero.masteryOfForce === "Aucun");
console.log("Trouve maîtrise force Aucun", firstNoForce);

//Challenge 10
const firstLongName = heroes.find((hero) => hero.name.length > 10);
console.log("Trouve nom +10", firstLongName);
