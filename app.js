// recursive func that finds the max element in a list

function recursiveMax(arr) {
    if (arr[1] && arr[0] > arr[1]) {
        arr.splice(1, 1);
        return recursiveMax(arr);   
    }
    else if (arr[0] < arr[1]) {
        arr.shift();
        return recursiveMax(arr);
    }
    else {
        return(arr[0]);
    }
};
let arr1 = [2,3,4,5,4,3,6,1,33,5,4];
let arr2 = [2,2,2];
let arr3 = [3,-1,40,20,10000,32];
console.log(`
Max1 is ${recursiveMax(arr1)}
Max2 is ${recursiveMax(arr2)}
Max3 is ${recursiveMax(arr3)}`
);
