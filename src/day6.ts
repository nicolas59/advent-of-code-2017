
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
    var tab = data.split(/\s/).map(item => parseInt(item));  
    const tabLength = tab.length;
    var ret : Result;
    let cache = new Map<string, number>();
    for(var count =1;; count++){
        var pos = getMaxIndex(tab);
        var val = tab[pos];
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