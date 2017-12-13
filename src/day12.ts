

function parse(data: string) :  Map<number, Array<number>>{
    let programsRel = new Map<number, Array<number>>();
    data.split("\n").forEach(item =>{
        item.match("([0-9]+) <-> (.+)").forEach((entry, index, arrReg) =>{
           // console.log(entry);
            switch(index){
                case 1:
                    programsRel.set(+entry, new Array<number>());
                    break;
                case 2:
                    entry.replace(/, */g, " ")
                        .split(" ")
                        .forEach(val => {
                            programsRel.get(+arrReg[1]).push(+val);
                        });
                    break;
            }
        });
    });
    return programsRel; 
}

function extractGroup(node:number, programsRel:Map<number, Array<number>>){
    let arrVisited = new Map<number, number>(), arrNode = Array<number>();
    const startVals = programsRel.get(node);
    Array.prototype.push.apply(arrNode, startVals);
    arrVisited.set(node, 1);
    while(arrNode.length>0){
        const currentNode = arrNode.pop();
        if(arrVisited.get(currentNode) === undefined){
            let notVisited = programsRel.get(currentNode)
                .filter(it => arrVisited.get(it) === undefined);
            Array.prototype.push.apply(arrNode, notVisited);
            arrVisited.set(currentNode, 1);
        }
    }
    return Array.from(arrVisited.keys());
}

function getNumberOfPrograms(data:string) : number {
    const programsRel = parse(data);
    return extractGroup(0, programsRel).length;
}

function getNumberOfGroups(data:string) : number {
    const programsRel = parse(data);
    let nbOfGroups =0;
    while(programsRel.size >0){
        const current = Array.from(programsRel.keys()).pop();
        const nodesOfGroup = extractGroup(current, programsRel);
        nodesOfGroup.forEach(item => programsRel.delete(item));
        nbOfGroups++;
    }
     return nbOfGroups;
}


export {getNumberOfPrograms, getNumberOfGroups}

