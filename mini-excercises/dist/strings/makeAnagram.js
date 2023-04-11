"use strict";
/***A student is taking a cryptography class and has found anagrams to be very useful.
 * Two strings are anagrams of each other if the first string's letters can be rearranged to form
 * the second string. In other words, both strings must contain the same exact letters in the same
 *  exact frequency. For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
 * The student decides on an encryption scheme that involves two large strings.
 * The encryption is dependent on the minimum number of character deletions required to make the two
 * strings anagrams. Determine this number.
 * Given two strings,  and , that may or may not be of the same length, determine the minimum
 *  number of character deletions required to make  and  anagrams.
 * Any characters can be deleted from either of the strings.
 **/
function makeAnagram(a, b) {
    let arrOfC = a.split('');
    let deletions = 0;
    for (let i = 0; i < arrOfC.length; i++) {
        let index = b.indexOf(arrOfC[i]);
        if (index !== -1) {
            b = b.slice(0, index) + b.slice(index + 1);
        }
        else {
            deletions++;
        }
    }
    deletions += b.length;
    return deletions;
}
