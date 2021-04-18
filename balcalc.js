$(document).ready(function () {
    $("button").on("click", calculate);
});

//gather all input
function calculate()
{
//gather the input

//ask user how many beers they consumed
//convert to number
    let totalBeers = parseFloat($("#numberOfBeers").val());

//ask user how many glasses of wine they consumed
//convert to number
    let totalWine = parseFloat($("#wineConsumed").val());

//ask user how many shots they consumed
//convert to number
    let totalShots = parseFloat($("#shotsConsumed").val());

//ask user how much they weigh
//convert to a number
    let totalWeight = parseFloat($("#weightInPounds").val());

//ask user how many hours it's been since first drink
//convert to number
    let hours = parseFloat($("#firstDrink").val());


//do some math

//multiply number of beers by 0.54 to get to get answer for beer
    let numberOfBeers = totalBeers * 0.54;

//multiply glasses of wine consumed by 0.6
    let wine = totalWine * 0.6;

//multiply shots consumed by 0.6 to get total shots
    let shotsConsumed = totalShots * 0.6;

//add totals from shots wine and beers
    let totalWineBeerShots = shotsConsumed + wine + numberOfBeers;

//multiply total 7.5 to get absorption ratte
    let absorptionRate = totalWineBeerShots * 7.5;

    //divide total by the persons weight in pounds to determine BAC
    let bac = absorptionRate / totalWeight;

//add hours since first drink //subtract 0.015
    let hoursSinceDrink = hours * .015;

    let theEnd = bac - hoursSinceDrink;

    //round total three decimal places
}
//OUTPUT
$("span#endResult").text(bac.toFixed(3));

$(".output").show()




