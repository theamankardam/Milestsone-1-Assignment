let duplicateCart = ["item1", "item2", "item1", "item2", "item3", "item1", "item4", "item5"];
let newCart = [];
for (let i = 0; i < duplicateCart.length; i++) {
    if (!newCart.includes(duplicateCart[i])) {
        newCart.push(duplicateCart[i]);
    }
}
console.log(newCart);