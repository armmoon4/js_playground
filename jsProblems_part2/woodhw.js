/**
 * Shirt price --> 500
 * pant price --> 300
 * shoe price --> 900
 * 
*/

function bazarCursor(shirtQuantity, pantQuantity , shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 300; 
    const shoePrice = 900; 

    const totalPriceshirt = shirtQuantity * shirtPrice; 
    const totalPricepant = pantQuantity * pantPrice; 
    const totalPriceShoe = shoeQuantity * shoePrice; 

    const totalPrice = totalPriceShoe + totalPricepant + totalPriceshirt; 

    return totalPrice; 
}

console.log(bazarCursor(3 , 5 , 3));