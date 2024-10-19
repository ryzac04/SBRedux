
// This is impure because it pushes to the original array
function addToArrImpure(arr, val) {
    arr.push(val);
    return arr; 
}

// Pure equivalent: 
function addToArrPure(arr, val) {
    return [...arr, val]; 
}

// Impure: adds key-val pair to an object
function addToObjImpure(obj, key, val) {
    obj[key] = val; 
    return obj; 
}

// Pure equivalent: 
function addToObjPur(obj, key, val) {
    return { ...obj, [key]: val }; 
}

// Impure: 
function doubleImpure(nums) {
    nums.forEach((num, i) => nums[i] *= 2);
    return nums; 
}

// Pure equivalent: 
function doublePure(nums) {
    return nums.map(n => n * 2);
}