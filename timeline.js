// add all dinos to the page
{/* 
<div class="dinosaurCard">
    <img src="assets/Coelophysis.jpg">
    <div>
        <h2>Coelophysis</h2>
        <ul>
            <li>Means 'hollow form'</li>
            <li>Carnivorous</li>
            <li>2.0m long</li>
        </ul>
    </div>
</div>  */}

//define attributes
let dinosaurEncyclopedia =[
    {name:"Coelophysis", timeBegin:-215, timeEnd:-201, meaning:"hollow form", diet:"Carnivorous", size:"9.8 ft long", extension:".jpg"},
    {name:"Dilophosaurus", timeBegin:-195, timeEnd:-184, meaning:"two-crested lizard", diet:"Carnivorous", size:"23 ft long", extension:".jpg"},
    {name:"Eustreptospondylus", timeBegin:-166, timeEnd:-154, meaning:"well twisted vertebra", diet:"Carnivorous", size:"15.2 ft long", extension:".jpg"},
    {name:"Brachiosaurus", timeBegin:-156, timeEnd:-146, meaning:"arm lizard", diet:"Herbivorous", size:"65.5 ft long", extension:".jpg"},
    {name:"Allosaurus", timeBegin:-155, timeEnd:-143, meaning:"different lizard", diet:"Carnivorous", size:"28 ft long", extension:".jpg"},
    {name:"Stegosaurus", timeBegin:-155, timeEnd:-145, meaning:"roof lizard", diet:"Herbivorous", size:"25 ft long", extension:".png"},
    {name:"Diplodocus", timeBegin:-152, timeEnd:-149, meaning:"double beam", diet:"Herbivorous", size:"83 ft long", extension:".jpg"},
    {name:"Apatosaurus", timeBegin:-152, timeEnd:-151, meaning:"deceptive lizard", diet:"Herbivorous", size:"72 ft long", extension:".jpg"},
    {name:"Archaeopteryx", timeBegin:-151, timeEnd:-149, meaning:"ancient wing", diet:"Carnivorous", size:"1.7 ft long", extension:".jpg"},
    {name:"Leaellynasaura", timeBegin:-118, timeEnd:-110, meaning:"Leaellyn's lizard", diet:"Herbivorous", size:"5.9 ft long", extension:".png"},
    {name:"Carcharodontosaurus", timeBegin:-100, timeEnd:-94, meaning:"shark-toothed lizard", diet:"Carnivorous", size:"39 ft long", extension:".jpg"},
    {name:"Spinosaurus", timeBegin:-100, timeEnd:-94, meaning:"spine lizard", diet:"Carnivorous", size:"46 ft long", extension:".jpg"},
    {name:"Parasaurolophus", timeBegin:-77, timeEnd:-73, meaning:"beside crested lizard", diet:"Herbivorous", size:"30 ft long", extension:".jpg"},
    {name:"Edmontosaurus", timeBegin:-73, timeEnd:-66, meaning:"lizard from Edmonton", diet:"Herbivorous", size:"38 ft long", extension:".jpg"},
    {name:"Therizinosaurus", timeBegin:-72, timeEnd:-66, meaning:"scythe lizard", diet:"Herbivorous", size:"31.5 ft long", extension:".png"},
    {name:"Ankylosaurus", timeBegin:-70, timeEnd:-66, meaning:"fused/bent lizard", diet:"Herbivorous", size:"23 ft long", extension:".png"},
    {name:"Tyrannosaurus", timeBegin:-69, timeEnd:-66, meaning:"tyrant lizard", diet:"Carnivorous", size:"41 ft long", extension:".jpg"},
    {name:"Triceratops", timeBegin:-68, timeEnd:-66, meaning:"three-horned face", diet:"Herbivorous", size:"28 ft long", extension:".jpg"}
];
let dinosaurDeck = [];

//create objects
let dinosaurCardSection = document.getElementById("dinosaurCards");
for(let i = 0; i < dinosaurEncyclopedia.length; i++){
    //create elements
    let divCard = document.createElement("div");
    divCard.classList.add("dinosaurCard");
    let imgDino = document.createElement("img");
    imgDino.alt = dinosaurEncyclopedia[i].name;
    imgDino.src = "assets/" + dinosaurEncyclopedia[i].name + dinosaurEncyclopedia[i].extension;
    let divText = document.createElement("div");
    let h2Name = document.createElement("h2");
    h2Name.textContent = dinosaurEncyclopedia[i].name;
    let ulInfo = document.createElement("ul");
    let liMeaning = document.createElement("li");
    liMeaning.textContent = "Means \'" + dinosaurEncyclopedia[i].meaning + "\'";
    let liDiet = document.createElement("li");
    liDiet.textContent = dinosaurEncyclopedia[i].diet;
    let liSize = document.createElement("li");
    liSize.textContent = dinosaurEncyclopedia[i].size;
    //nest elements
    divCard.appendChild(imgDino);
    divCard.appendChild(divText);
        divText.appendChild(h2Name);
        divText.appendChild(ulInfo);
            ulInfo.appendChild(liMeaning);
            ulInfo.appendChild(liDiet);
            ulInfo.appendChild(liSize);
    //add cards to page
    dinosaurCardSection.appendChild(divCard);
    //store cards for later access
    dinosaurDeck[i] = divCard;
}

//add input event handler to switch visible dinos based on year
const input = document.getElementById("yearRangeInput");
const yearNumOutput = document.getElementById("yearNumOutput");
const calculatedPeriodOutput = document.getElementById("calculatedPeriodOutput");

input.addEventListener("input", () => {
    let yearNum = -1 * parseInt(input.value);
    yearNumOutput.textContent = yearNum;
    
    /*  range: 245-66 million years ago
        Triassic Period: 252-201 million years ago
        Jurassic Period: 201-145 million years ago
        Cretaceous Period: 145-66 million years ago
    */
    let calculatedPeriodText = "Triassic";
    if(yearNum < 201){
        if(yearNum >= 145){
            calculatedPeriodText = "Jurassic";
        }
        else{
            calculatedPeriodText = "Cretaceous";
        }
    }
    calculatedPeriodOutput.textContent = calculatedPeriodText;
    displayTimeDinos(-1 * yearNum);
});

displayTimeDinos(parseInt(input.value));
function displayTimeDinos(year){
    for(let i = 0; i < dinosaurEncyclopedia.length; i++){
        if(year >= dinosaurEncyclopedia[i].timeBegin && year <= dinosaurEncyclopedia[i].timeEnd){
            dinosaurDeck[i].classList.add("visible");
        }
        else{
            dinosaurDeck[i].classList.remove("visible");
        }
    }
}