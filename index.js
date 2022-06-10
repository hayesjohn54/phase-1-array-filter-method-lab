// Code your solution here
function findMatching(array, string){
    const newArray = []
    for(const user of array){
        if(string == user){
            newArray.push(user)
        } else if (string == user){
            newArray.push(user.toLowerCase)
        }
        
    } 
    return newArray;
}



function fuzzyMatch(array, string){
    const newArray = []
    for(const char of array){
        if(string === char){
            newArray.push(string)
        }
    }
    return newArray;
}

function matchName(array, string){
    const newArray = []
    for(const item of array){
        if(string === item.name){
            newArray.push(string)
        }
    }
    return newArray;
}