
function findStartIndex(grid: Array<Array<string>>): { row: number, col: number } {
    const firstLine = grid[0];
    let ret = { row: 0, col: 0 }
    firstLine.forEach((item, index) => {
        if (item === "|") {
            ret.col = index;
        }
    });
    return ret;
}


function findRoad(data: string) : {phrase:string, steps:number} {
    var steps = 0;
    var grid = Array<Array<string>>();
    data.split("\n").forEach((value, index) => {
        grid.push(value.split(""))
    });

    var pos = findStartIndex(grid);
    var direction = { vRow: 1, vCol: 0 };
    var ret = Array<string>();
    while (grid[pos.row] !== undefined 
        && grid[pos.row][pos.col] !== undefined
        && grid[pos.row][pos.col] !== " ") {
        var currentElement = grid[pos.row][pos.col];
        if (currentElement.match(/[A-Z]/)) {
            ret.push(currentElement);
        } else if(currentElement === "+"){
            if(direction.vCol === 0){
                direction.vRow = 0;
                direction.vCol = 
                    (grid[pos.row][pos.col+1] !==undefined && grid[pos.row][pos.col+1] !== " ")?1:-1;
                }else{
                direction.vCol = 0;
                direction.vRow = 
                    (grid[pos.row+1] !==undefined && grid[pos.row+1][pos.col] !== " ")?1:-1;
            }
            
        }
        [pos.row, pos.col] = [pos.row + direction.vRow, pos.col + direction.vCol];
        steps++;
    }
    return {phrase:ret.join("").trim(), steps:steps};
}

export { findRoad }