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
});