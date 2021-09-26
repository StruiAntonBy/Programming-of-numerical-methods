let func1 = new Function("x", "return " + prompt("Введите функцию для задания 1")); // x * Math.log(x) - 1.2
let der_func1 = new Function("x", "return " + prompt("Введите производную функции для задания 1")); // Math.log(x) + 1
let der2_func1 = new Function("x", "return " + prompt("Введите 2 производную функции для задания 1")); // (1 / x)
let e = parseFloat(prompt("Введите e для задания 1 и 2")); // 0.001

let a = parseInt(prompt("Введите а для метода дихотомии"));
let b = parseInt(prompt("Введите b для метода дихотомии"));

let x0_newton = parseFloat(prompt("Введите x0 для метода Ньютона"));

let x0_secant = parseFloat(prompt("Введите x0 для метода секущих"));
let x1_secant = parseFloat(prompt("Введите x1 для метода секущих"));

let x0_chord = parseFloat(prompt("Введите x0 для метода хорд"));
let x1_chord = parseFloat(prompt("Введите x1 для метода хорд"));

let func2 = new Function("x", "return " + prompt("Введите функцию для задания 2")); // (-1 / 6) * Math.pow(x, 3) + (1 / 2) * Math.pow(x, 2) + (5 / 6)
let x0_simple_iter = parseFloat(prompt("Введите x0 для метода простой итерации"));

if (definedSign(func1(a)) === definedSign(func1(b))){
    alert("Неправильные значения для метода дихотомии");
} else if ((func1(x0_chord) * func1(x1_chord)) >= 0){
    alert("Неправильные значения для метода хорд");
} else if ((der2_func1(x0_newton) * func1(x0_newton)) <= 0){
    alert("Неправильное значение x0 для метода Ньютона");
} else {
    document.getElementById("table_1").innerHTML = createTable(
        dichotomy_table, methodDichotomy(a, b, func1, e));
    
    document.getElementById("table_2").innerHTML = createTable(
        default_table, methodNewton(x0_newton, func1, der_func1, e));
    
    document.getElementById("table_3").innerHTML = createTable(
        default_table, methodSecant(x0_secant, x1_secant, func1, e));
    
    document.getElementById("table_4").innerHTML = createTable(
        default_table, methodChord(x0_chord, x1_chord, func1, e));
    
    document.getElementById("table_5").innerHTML = createTable(
        default_table, methodSimpleIteration(x0_simple_iter, func2, e));
}