

function checkSumByLine(data:string) {
return data.match(/([0-9]+)/g)
        .map(item => parseInt(item))
        .sort((a,b) => b-a)
        .map((item, index, array) => index ===0 
            || index === array.length-1 ? item:0)
        .reduce((p, n) => p-n);
}


function checkSum(data:string, fn:(arg: string) => (number)) {
    return data.split("\n")
    .map(line => fn(line))
    .reduce((a,b)=> a+b);
}

function checkSumByLineWithDivisible(data:string) {
    var nbArray = data.match(/([0-9]+)/g)
    .map(item => parseInt(item))
    .sort((a,b) => a-b);
    var nb1 =-1, nb2 = -1;
    nbArray.forEach((item, index, array) => {
                if(nb1 === -1){
                    nbArray.slice(index+1)
                        .forEach((it, idx) => {
                            if(it%item ==0 ){
                               nb1 =it;
                               nb2 = item;
                            }
                        })
                }
            })
        
        return nb1/nb2;
    }

export {checkSumByLine, checkSum, checkSumByLineWithDivisible}