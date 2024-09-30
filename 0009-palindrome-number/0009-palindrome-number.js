/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let reminder = 0;
    let count = 1;
    let orgNum = x
    
    if(x % 10 === 0 && x > 0) {
        return false;
    }
    
    if(x === 0) {
        return true;
    }
    
    while(x>0) {
        reminder = x%10;
        reverse *=  count;
        reverse += reminder
        x = parseInt(x/10);
        count = 10;
    } 
    return orgNum === reverse;
};