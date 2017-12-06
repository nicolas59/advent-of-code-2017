

function isAvailablePassPhrases(data:string) {
    return  data.split(" ")
    .sort()
    .map((item, index, array) => Number(item === array[index+1]?1:0))
    .reduce((p,n) => p+n) == 0;
}


function isAvailablePassPhrasesWitoutAnagram(data:string) {
   return  data.split(" ")
        .map((item) => item.split("").sort().join(""))
        .sort()
        .map((item, index, array) =>Number(item === array[index+1]?1:0))
        .reduce((p,n) => p+n) == 0;
}

function getNumberOfAvailablesPassPhrases(data:string, fn : (arg:string)=>boolean){
    return data.split("\n")
     .map(passphrase => Number(fn(passphrase)?1:0))
     .reduce((p,n) => p+n);
}


export {isAvailablePassPhrases, getNumberOfAvailablesPassPhrases, isAvailablePassPhrasesWitoutAnagram}