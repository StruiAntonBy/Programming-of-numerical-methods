let default_table = "<table border='1' cellpadding='10'> \
                            <tr> \
                                <td>i</td> \
                                <td>xi</td> \
                            </tr>";

let dichotomy_table = "<table border='1' cellpadding='10'> \
                            <tr> \
                                <td>i</td> \
                                <td>[a, b]</td> \
                                <td>xi</td> \
                                <td>f(xi)</td> \
                                <td>Знак f(a)</td> \
                                <td>Знак f(xi)</td> \
                                <td>Знак f(b)</td> \
                            </tr>"

function createTable(table, res){
    for (i = 0; i < res.i.length; i++){
        table += "<tr>";
        for (let key in res){
            if (res[key][i] !== undefined){
                table += `<td>${res[key][i]}</td>`;
            }
        }
        table += "</tr>";
    }
    return table + "</table>"
}
                            