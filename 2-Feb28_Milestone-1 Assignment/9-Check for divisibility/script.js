let arr = [12, 15, 17, 18, 21, 23, 24, 27];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0 && arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
    else {
        continue;
    }
}

