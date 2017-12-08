

function addOperationStep1(move:number){
    return 1;
}

function addOperationStep2(move:number){
    return move>=3?-1:1;
}

function getNumberOfSteps(data:string, fn:(arg:number)=>number){
    const tab = data.split('\n').map(Number);
    let nbSteps =0;
    let currentIndex =0;
    let move = tab[0];
    for(;move !==undefined; nbSteps++,  currentIndex +=move, move =tab[currentIndex]){
        tab[currentIndex]+=fn(move);
    }
    return nbSteps;
}



export {getNumberOfSteps, addOperationStep2, addOperationStep1}