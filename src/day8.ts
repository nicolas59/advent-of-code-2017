function getRegistreVal(registres:Map<String, number>, varname: string) {
    var v = registres.get(varname);
    if (v === undefined) {
        v = 0;
        registres.set(varname, 0)
    }
    return v;
}

const reg = /([a-z]+) (inc|dec) ([\\-\d]+) if ([a-z]+) (<|>|<=|>=|!=|==) ([\\-\d]+)/

// Comparator
const EQUALS  = (val1:number, val2:number) => val1 == val2;
const GREATER  = (val1:number, val2:number) => val1 > val2;
const LESS  = (val1:number, val2:number) => val1 < val2;
const GREATER_OR_EQUAL  = (val1:number, val2:number) => GREATER(val1, val2) || EQUALS(val1, val2);
const LESS_OR_EQUAL  = (val1:number, val2:number) => LESS(val1, val2) || EQUALS(val1, val2);
const NOT_EQUAL =  (val1:number, val2:number) => !EQUALS(val1, val2);


let comparators = new Map<string, (val1:number, val2:number) => boolean>();
comparators.set("==", EQUALS);
comparators.set(">", GREATER);
comparators.set(">=", GREATER_OR_EQUAL);
comparators.set("<", LESS);
comparators.set("<=", LESS_OR_EQUAL);
comparators.set("!=", NOT_EQUAL);

//Operators
let operators = new Map<string,  (val1:number, val2:number) => number>();
operators.set("inc", (val1, val2) => val1+val2);
operators.set("dec", (val1, val2) => val1-val2);

function evaluateExpression(registres:Map<string, number>, expression:string){
    var [c, var1, op, var2, varc, cmp, valc] = reg.exec(expression);
    const valcI = parseInt(valc);
    const valVarc = getRegistreVal(registres, varc);
    if(comparators.get(cmp)(valVarc, valcI)){
        var var1Val = getRegistreVal(registres, var1);
        var var2val = +var2;
        registres.set(var1, operators.get(op)(var1Val, var2val));
    }
}

function getMaximun(registres: Map<string, number>) : {name:string, val :number}{
    var  varName:string, varValue: number = undefined;
    registres.forEach((v, n ) =>{
        if(varValue === undefined || varValue <v){
            varName = n.valueOf();
            varValue = v;
        }
    });
    return {name:varName, val:varValue};    
}

function solve1(data: string): number {
    let registres = new Map<string, number>();
    data.split("\n").forEach(item => {
        evaluateExpression(registres, item);
    })
    return getMaximun(registres).val.valueOf();
}

function solve2(data: string): number {
    let registres = new Map<string, number>();
    let maxValue : number = Number.NEGATIVE_INFINITY;
    data.split("\n").forEach(item => {
        evaluateExpression(registres, item);
        maxValue =  Math.max(maxValue,  getMaximun(registres).val);
    })
    return maxValue;
}

export { solve1,solve2 }