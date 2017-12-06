

function getNumberOfCycles(data:string):number{
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
        //console.log(ret, array);
        return ret;

    }


    var count =0;
    var cache:any={};
    //cache[tab.join(' ')] =0;
    while(true){
        var maxIndex = getMaxIndex(tab);
        count++;
        var val = tab[maxIndex];
       
        tab[maxIndex] = 0;
        var pos = maxIndex;
        while(val != 0){
            if(pos == tab.length-1){
                pos = 0;
            }else{
                pos++;
            }
            val--;
            tab[pos]++;
        }

        //console.log(tab.join(' '));
        
        if(cache[tab.join(' ')] !== undefined){
            break;
        }
       
        cache[tab.join(' ')] =0;
    }

    return count;
}


export {getNumberOfCycles}