// Code your solution here
function findMatching(array, name) {
    let newArray = array.filter(function(driver){
         if (name.toUpperCase() === driver.toUpperCase()) {
             return true;
        }
    })
   return newArray;
}

function fuzzyMatch(array, string) {
    let newArray = array.filter(function(letter){
        if (letter[0] === string[0]) {
            return true;
        }
    })
    return newArray;
}

function matchName(array, string) {
    let newArray = array.filter(function(key){
        if (string === key.name) {
            return true;
        }
    })
    return newArray;
}