/**You are given a string containing characters A and B only. 
 * Your task is to change it into a string such that there are no matching adjacent characters.
 *  To do this, you are allowed to delete zero or more characters in the string.
 * Your task is to find the minimum number of required deletions.
*/

function alternatingCharacters(s: string): number {
    let deletions = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            deletions++;
        }
    }
    return deletions;
}