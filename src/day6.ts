
interface Result {
    cycles : number,
    blockBeforeRepetition : number
}

function getMaxIndex(array:Array<number>) {
    var ret = 0;    
    var max = 0;
    array.forEach((item, idx) => {
        if(item>max){
            ret = idx;
            max = item;
        }
    });
    return ret;
}

function getNumberOfCycles(data:string):Result{
    let tab = data.split(/\s/).map(Number);  
    const tabLength = tab.length;
    let ret : Result;
    let cache = new Map<string, number>();
    for(let count =1;; count++){
        let pos = getMaxIndex(tab);
        let val = tab[pos];
        tab[pos] = 0;
        //var pos = maxIndex;
        for(;val != 0; val--){
            pos =  pos === tabLength-1?0:++pos;
            tab[pos]++;
        }
        const key = tab.join(' ');
        if(cache.get(key) !== undefined){
            ret = {cycles:count, 
                   blockBeforeRepetition : count - cache.get(key)};
            break;
        }
        cache.set(key, count);
    }
    return ret;
}


export {getNumberOfCycles}