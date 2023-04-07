"use strict";
function isValid(s) {
    let hash = {};
    let max, min;
    let minCount = 0;
    let maxCount = 0;
    // Get the frequencies of each character
    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        if (hash[key]) {
            hash[key]++;
        }
        else {
            hash[key] = 1;
        }
    }
    // Push all strings into an array
    let frequencies = [];
    for (let key in hash) {
        frequencies.push(hash[key]);
    }
    // Sort the array and get the max and min frequency
    frequencies.sort();
    min = frequencies[0];
    max = frequencies[frequencies.length - 1];
    // Get the no of max count and min count for the frequency
    for (let i = 0; i < frequencies.length; i++) {
        if (frequencies[i] === max) {
            maxCount++;
        }
        if (frequencies[i] === min) {
            minCount++;
        }
    }
    // Make our validation check
    if (min === max) {
        return 'YES';
    }
    if (max - (min - 1) == max && minCount === 1 && maxCount !== 1) {
        return 'YES';
    }
    if (max - min !== 1) {
        return 'NO';
    }
    if (maxCount === minCount) {
        return 'NO';
    }
    if (maxCount === 1 || minCount === 1) {
        return 'YES';
    }
    return 'NO';
}
