function mismeses(){
    var valor = document.getElementById("meses").value;
    var texto = "";

    switch(valor){
        case "1":
        texto = "<ul class='milista'><li>3 Carrera Herediana</li><li>17 Carrera de la Paz</li><li>31 Carrera de las brujas</li></ul>";
        break;
        case "2":
        texto = "<ul class='milista'><li>14 Carrera del helado</li><li>21 Carrera perruna</li><li>28 Carrera Monte de la Cruz</li></ul>";
        break;
        default:
        texto = "<ul class='milista'><li>12 Carrera de Candelaria</li><li>19 Carrera de los Pozos</li><li>26 Carrera de la Navidad</li></ul>";

    }

    document.getElementById("infoMisMeses").innerHTML = texto;
}