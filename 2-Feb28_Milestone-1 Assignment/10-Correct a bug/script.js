let cart = [2, 1, 3, 2, 4, 5]; // cart item quantities
let correctCartItems = correctBug(cart);
console.log(correctCartItems);


function correctBug(array) {
    for (let index = 0; index < array.length; index++) {
        array[index] = array[index] * 2;
    }
    return array;
}
