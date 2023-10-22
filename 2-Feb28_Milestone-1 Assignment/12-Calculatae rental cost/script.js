function rentalCost(days, car) {
    switch (car) {
        case 'Economy': return days * 4000;
        case 'Midsize': return days * 10000;
        case 'Luxury': return days * 20000;
    }
}
console.log(`Customer_1 Rental cost of 2 days of Economy Car  is  : ${rentalCost(2, "Economy")}`);
console.log(`Customer_2 Rental cost of 5 days of Midsize Car  is  : ${rentalCost(5, "Midsize")}`);
console.log(`Customer_3 Rental cost of 8 days of Luxury  Car  is  : ${rentalCost(8, "Luxury")}`);
