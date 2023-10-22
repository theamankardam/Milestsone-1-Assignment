alert(`Mix colors and Make color Combination`);
let a = prompt(`Enter the First Color`);
let b = prompt(`Enter the Second Color`);
let c = Mixer();
switch (c) {
    case 1:
        alert(`Purple`);
        console.log(`Purple`);
        break;
    case 2:
        alert(`Orange`);
        console.log(`Orange`);
        break;
    case 3:
        alert(`Green`);
        console.log(`Green`);
        break;
    default: alert(`Invalid color Combination`);
        console.log(`Invalid color Combination`);
        break;
}

function Mixer() {
    if (a == "red" && b == "blue") {
        return 1;
    }
    else if (a == "red" && b == "yellow") {
        return 2;
    }
    else if (a == "blue" && b == "yellow") {
        return 3;
    }
}