

function isAvailablePassPhrases(data:string) {
    return  data.split(" ")
    .sort()
    .map((item, index, array) =>{
     return (item === array[index+1])?1:0})
    .reduce((p,n) => p+n) == 0;
}


function isAvailablePassPhrasesWitoutAnagram(data:string) {
   return  data.split(" ")
        .map((item) => item.split("").sort().join(""))
        .sort()
        .map((item, index, array) =>item === array[index+1]?1:0)
        .reduce((p,n) => p+n) == 0;
}

function getNumberOfAvailablesPassPhrases(data:string, fn : (string)=>boolean){
    return data.split("\r\n")
     .map(passphrase => fn(passphrase)?1:0)
     .reduce((p,n) => p+n);
}


export {isAvailablePassPhrases, getNumberOfAvailablesPassPhrases, isAvailablePassPhrasesWitoutAnagram}