function definedSign(num){
    return (num < 0) ? "-": "+";
}

function methodDichotomy(a, b, func, e){
    let res = {};
    for (let elem of ["i", "[a, b]", "xi", "fxi", "fa_sign", "fxi_sign", "fb_sign"]){
        res[elem] = [];
    }
    
    let i = 0;
    while (true){
        let c = (a + b) / 2;
        let fc = func(c);

        let array = [i, `[${a}, ${b}]`, c, fc, definedSign(func(a)), definedSign(fc), definedSign(func(b))];
        let j = 0;
        for (let key in res){
            res[key].push(array[j]);
            j++;
        }

        if (fc == 0){
            break;
        } else {
            if(((b - a) / 2) <= e){
                break;
            } else {
                if (array[4] != array[5]){
                    b = c;
                } else {
                    a = c;
                }
            }
        }
        i++;
    }
    
    return res;
}

function methodNewton(x0, func, der_func, e){
    let res = {
        "i": [0],
        "xi": [x0]
    };

    let i = 0;
    while(true){
        i++;

        let xk = x0 - (func(x0) / der_func(x0));

        res["i"].push(i);
        res["xi"].push(xk);

        if (Math.abs(xk - x0) <= e){
            break;
        }
        x0 = xk;
    }

    return res;
}

function methodSecant(x0, x1, func, e){
    let res = {
        "i": [0, 1],
        "xi": [x0, x1]
    };

    let i = 1;
    while(true){
        i++;

        let xk = x1 - ((func(x1) * (x1 - x0)) / (func(x1) - func(x0)));

        res["i"].push(i);
        res["xi"].push(xk);

        if (Math.abs(xk - x1) <= e){
            break;
        }

        x0 = x1, x1 = xk;
    }

    return res;
}

function methodChord(x0, x1, func, e){
    let res = {
        "i": [0, 1],
        "xi": [x0, x1]
    };

    let i = 1;
    while(true){
        i++;

        let xk = x1 - ((func(x1) * (x1 - x0)) / (func(x1) - func(x0)));

        res["i"].push(i);
        res["xi"].push(xk);

        if (Math.abs(xk - x1) <= e){
            break;
        }

        x1 = xk;
    }

    return res;
}

function methodSimpleIteration(x0, func, e){
    let res = {
        "i": [0],
        "xi": [x0]
    };

    let i = 0;
    while(true){
        i++;

        let xk = func(x0);

        res["i"].push(i);
        res["xi"].push(xk);

        if (Math.abs(xk - x0) <= e){
            break;
        }

        x0 = xk;
    }

    return res;
}