
function sum(data: string) {
    return data.split("")
    .map((val, index, array) => {
       return (index === array.length - 1 && val === array[0])
        || ( val === array[index + 1]) ? parseInt(val):0;
    }).reduce((previous, next)=> previous+next);
}

function sumHalfway(data: string){
    var dataAr =  data.split("");
    return dataAr
     .slice(0, dataAr.length/2)
     .map((val, index, array) => val === dataAr[index + dataAr.length/2]? 2 * parseInt(val):0)
     .reduce((previous, next) => previous+next);
}

export { sum, sumHalfway }