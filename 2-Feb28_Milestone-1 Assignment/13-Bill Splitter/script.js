let dishCosts = [200, 300, 100, 400, 250];
let totalPeople = 5;
console.log(billSplit(dishCosts, totalPeople));


function billSplit(total, People) {
    total = 0;
    for (let i = 0; i < dishCosts.length; i++) {
        total += dishCosts[i];
    }
    let obj = {
        TotalBill: total,
        EachPersonBill: (total / People)
    }
    return obj;
}