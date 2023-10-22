let originalPrice = [400, 500, 600, 700, 1000];
let discountedPrice = [320, 360, 430, 570, 710];
let percent = [];

discountPercentage = (originalPrice, discountedPrice, percent) => {
    for (let i = 0; i < originalPrice.length; i++) {
        percent.push((((originalPrice[i] - discountedPrice[i]) * 100) / originalPrice[i]).toFixed(2))
    }
    return percent;
}

discountPercentage(originalPrice, discountedPrice, percent);

for (let i = 0; i < percent.length; i++) {
    console.log(`Product ${i + 1} has Discount of ${percent[i]} %`);
}