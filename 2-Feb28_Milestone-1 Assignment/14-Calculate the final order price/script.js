let customerCart = [
    {
        unitPrice: 20,
        quantity: 5
    },

    {
        unitPrice: 50,
        quantity: 4
    },

    {
        unitPrice: 40,
        quantity: 10
    },

    {
        unitPrice: 100,
        quantity: 1
    },

    {
        unitPrice: 200,
        quantity: 1
    }

];

TotalCost = ((Cart) => {
    let arr = [];
    let total = 0;
    for (let i = 0; i < Cart.length; i++) {
        arr.push(customerCart[i].unitPrice * customerCart[i].quantity)
        total += arr[i];
    }
    return total;
})

console.log(`TotalCost : ${TotalCost(customerCart)}`);
