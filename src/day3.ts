
/*
17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...

*/

enum Sens {
    UP, DOWN, LEFT, RIGHT
}


function getDistance(data:string) :number {
    var val = parseInt(data);
    var x =0, y =0, nbCase = 1, nbMove = 2,
     currentMove = 2, caseToMove =1;
    var sens :Sens = Sens.RIGHT;


    for(var index=2;index<=val;index++){
        var nextDirection;
        switch(sens){
            case Sens.LEFT:
               x--;
               nextDirection = Sens.DOWN;
               break;
            case Sens.RIGHT:
               x++;
               nextDirection = Sens.UP;
               break;
            case Sens.UP:
                y++;
                nextDirection = Sens.LEFT;
                break;
            case Sens.DOWN:
                y--;
                nextDirection = Sens.RIGHT;
                break;
        }
        
        nbCase--;
        if(nbCase == 0){
            sens = nextDirection;
            currentMove--;
            if(currentMove == 0){
                nbCase = (++caseToMove);
                currentMove = 2;
                
            }else{
                nbCase =caseToMove;
               
            }
        }
    }
    return Math.abs(x) + Math.abs(y);
}

function getRealValue(val:any) : number{
    return Number(val)?val:0;
}

function getValue(data:string) :number {
    var ret = 0;
    var val = parseInt(data);
    var x =0, y =0, nbCase = 1, nbMove = 2,
     currentMove = 2, caseToMove =1;
    var sens :Sens = Sens.RIGHT;

    var tabValue :any = {};
    tabValue[`0, 0`] =1;
    for(var index=2;index<=val;index++){
        var nextDirection;
        switch(sens){
            case Sens.LEFT:
               x--;
               nextDirection = Sens.DOWN;
               break;
            case Sens.RIGHT:
               x++;
               nextDirection = Sens.UP;
               break;
            case Sens.UP:
                y++;
                nextDirection = Sens.LEFT;
                break;
            case Sens.DOWN:
                y--;
                nextDirection = Sens.RIGHT;
                break;
        }
        
        nbCase--;


       tabValue[`${x}, ${y}`]= getRealValue(tabValue[`${x-1}, ${y-1}`])
        + getRealValue(tabValue[`${x-1}, ${y+1}`])
        + getRealValue(tabValue[`${x+1}, ${y-1}`])
        + getRealValue(tabValue[`${x+1}, ${y+1}`])
        + getRealValue(tabValue[`${x}, ${y+1}`])
        + getRealValue(tabValue[`${x}, ${y-1}`])
        + getRealValue(tabValue[`${x+1}, ${y}`])
        + getRealValue(tabValue[`${x-1}, ${y}`]);

        if( tabValue[`${x}, ${y}`]>=val){
            ret = tabValue[`${x}, ${y}`];
            break;
        }
        if(nbCase == 0){
            sens = nextDirection;
            currentMove--;
            if(currentMove == 0){
                nbCase = (++caseToMove);
                currentMove = 2;
                
            }else{
                nbCase =caseToMove;
               
            }
           
            
        }
       

    }

    return ret;
}


export {getDistance, getValue}