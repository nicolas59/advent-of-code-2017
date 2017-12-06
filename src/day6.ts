
interface Result {
    cycles : number,
    blockBeforeRepetition : number
}


function getNumberOfCycles(data:string):Result{
    var tab = data.match(/([0-9]+)/g).map(item => parseInt(item));
    var getMaxIndex = (array:Array<number>) =>{
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

 var ret : Result;
    var count =0;
    var cache:any={};
    //cache[tab.join(' ')] =0;
    while(true){
        var maxIndex = getMaxIndex(tab);
        count++;
        var val = tab[maxIndex];
        tab[maxIndex] = 0;
        var pos = maxIndex;
        for(;val != 0; val--){
            pos =  pos === tab.length-1?0:++pos;
            tab[pos]++;
        }
        const key = tab.join(' ');
        if(cache[key] !== undefined){
            ret = {cycles:count, 
                   blockBeforeRepetition : count - cache[key]};
            break;
        }
        cache[key] =count;
    }

    return ret;
}


export {getNumberOfCycles}