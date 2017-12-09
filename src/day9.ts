


enum BlockType {
    GROUP,
    IGNORE_NEXT,
    GARBAGE
}

declare global {
    interface Array<T> {
        pushIfNotUndefined(value: T): void;
    }
}

Array.prototype.pushIfNotUndefined = function (value: any) {
    if(value !== undefined){
        this.push(value);
    }
};


function getToltalScore(data: string): { score: number, nonCanceledCharByGarbage: number } {
    let score = 0, nonCanceledChar = 0;
    let currentPoint = 0;
    let stackBlocType = new Array<BlockType>();

    data.split("").forEach(character => {
        let lastBlockType = stackBlocType.pop();
        if (BlockType.IGNORE_NEXT !== lastBlockType) {
            switch (character) {
                case "{":
                    stackBlocType.pushIfNotUndefined(lastBlockType);
                    if (lastBlockType !== BlockType.GARBAGE) {
                        stackBlocType.push(BlockType.GROUP);
                        currentPoint++;
                    } else {
                        nonCanceledChar++;
                    }
                    break;
                case "<":
                    stackBlocType.pushIfNotUndefined(lastBlockType);
                    if (BlockType.GARBAGE !== lastBlockType) {
                        stackBlocType.push(BlockType.GARBAGE);
                    } else {
                        nonCanceledChar++;
                    }
                    break;
                case "!":
                    stackBlocType.pushIfNotUndefined(lastBlockType);
                    stackBlocType.push(BlockType.IGNORE_NEXT);
                    break;
                case ">":
                    if (lastBlockType !== BlockType.GARBAGE) {
                        stackBlocType.pushIfNotUndefined(lastBlockType);
                    } else if (lastBlockType !== BlockType.GARBAGE) {
                        nonCanceledChar++;
                    }
                    break;
                case "}":
                    if (lastBlockType == BlockType.GARBAGE) {
                        stackBlocType.push(lastBlockType);
                        nonCanceledChar++;
                    } else if (lastBlockType == BlockType.GROUP) {
                        //add point
                        score += currentPoint;
                        currentPoint--;
                    } else {
                        stackBlocType.push(lastBlockType);
                        currentPoint++;
                    }
                    break;
                default:
                    stackBlocType.pushIfNotUndefined(lastBlockType);
                    if (lastBlockType === BlockType.GARBAGE) {
                        nonCanceledChar++;
                    }
                    break;


            }
        }
    })
    return { score: score, nonCanceledCharByGarbage: nonCanceledChar };
}



export { getToltalScore }