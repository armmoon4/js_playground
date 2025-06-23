function calculateElectronicsBudget(laptops, tablets, mobiles) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    return (laptops * laptopPrice) + (tablets * tabletPrice) + (mobiles * mobilePrice);
}

console.log("Total Budget:", calculateElectronicsBudget(2, 1, 3)); // Example
