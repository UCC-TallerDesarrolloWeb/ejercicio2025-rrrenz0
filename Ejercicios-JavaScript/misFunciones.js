/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

function conversorUnidades(unidad, valor) {
    let metro, pie, pulgada, yarda;

    console.log(valor); 
    console.log(isNaN(valor));

    if (isNaN(valor)){
        alert("El valor introducido no es un número");
        metro = "";
        pie = "";
        pulgada = "";
        yarda = "";
        document.getElementById("metro").value=metro;
        document.getElementById("pie").value=pie;
        document.getElementById("pulgada").value=pulgada;
        document.getElementById("yarda").value=yarda;
        return;
    }   

if (unidad=="unid_metro"){
    metro=valor;
    pie=3.28*metro;
    pulgada=39.37*metro;
    yarda=1.09*metro;

} else if (unidad=="unid_pulgada"){
    pulgada=valor;
    metro=pulgada/39.37;
    pie=3.28*metro;
    yarda=1.09*metro;

} else if (unidad=="unid_pie"){
    pie=valor;
    metro=pie/3.28;
    pulgada=39.37*metro;
    yarda=1.09*metro;

} else if (unidad=="unid_yarda"){
    yarda=valor;
    metro=yarda/1.09;
    pie=3.28*metro;
    pulgada=39.37*metro;
}

    document.getElementById("metro").value=metro;
    document.getElementById("pie").value=pie;
    document.getElementById("pulgada").value=pulgada;
    document.getElementById("yarda").value=yarda;
}