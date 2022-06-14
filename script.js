import drivers from './motorists.json' assert { type: 'json' };

function MakeTr (tr, text, id=false) {
    let td = document.createElement("td");
    td.innerText = text;
    td.id = id;
    tr.append(td);
}

function onClickEvent (i) {
    if (!document.getElementById("trFull")) {
        const tbodyFull = document.getElementById("tbodyFull");
        let trFull      = document.createElement("tr");
        trFull.id       = "trFull";
        tbodyFull.append(trFull);
        trFull = document.getElementById("trFull");
        MakeTr(trFull, drivers[i].person.lastname, "lastname");
        MakeTr(trFull, drivers[i].person.firstname, "firstname")
        MakeTr(trFull, drivers[i].car.manufacturer, "manufacturer");
        MakeTr(trFull, drivers[i].car.model, "model");
        MakeTr(trFull, drivers[i].car.year, "year");
        MakeTr(trFull, drivers[i].car.type, "type");
        MakeTr(trFull, drivers[i].car.color, "color");
        let td = document.getElementById("color");
        let divColor = document.createElement("div");
        divColor.id = "divColor";
        divColor.style.backgroundColor = drivers[i].car.color;
        divColor.style.width = "15px";
        divColor.style.height = "15px";
        td.append(divColor);
        MakeTr(trFull, '', "isConvertible");
        td = document.getElementById("isConvertible");
        let inputCkeckbox = document.createElement("input");
        inputCkeckbox.type = "checkbox";
        inputCkeckbox.id = "inputCkeckbox";
        inputCkeckbox.checked = drivers[i].car.isConvertible;
        td.append(inputCkeckbox);
        MakeTr(trFull, drivers[i].car.vin, "vin");
    } else  {
        let td = document.getElementById("lastname");
        td.innerText = drivers[i].person.lastname;
        td = document.getElementById("firstname");
        td.innerText = drivers[i].person.firstname;
        td = document.getElementById("manufacturer");
        td.innerText = drivers[i].car.manufacturer;
        td = document.getElementById("model");
        td.innerText = drivers[i].car.model;
        td = document.getElementById("year");
        td.innerText = drivers[i].car.year;
        td = document.getElementById("type");
        td.innerText = drivers[i].car.type;
        td = document.getElementById("color");
        td.innerText = drivers[i].car.color;
        let divColor = document.createElement("div");
        divColor.id = "divColor";
        divColor.style.backgroundColor = drivers[i].car.color;
        divColor.style.width = "15px";
        divColor.style.height = "15px";
        td.append(divColor);
        let inputCkeckbox = document.getElementById("inputCkeckbox");
        inputCkeckbox.checked = drivers[i].car.isConvertible;
        td = document.getElementById("vin");
        td.innerText = drivers[i].car.vin;
    }
}

function addRow (drivers) {
    const tbodyShort = document.getElementById('tbodyShort');
    drivers.forEach(function(item, i, drivers) {
        let tr = document.createElement('tr');
        tr.id = i;
        tr.onclick = function() { onClickEvent (i)};
        tbodyShort.append(tr);
        tr = document.getElementById(i);
        MakeTr(tr, drivers[i].person.lastname);
        MakeTr(tr, drivers[i].person.firstname)
        MakeTr(tr, drivers[i].car.manufacturer);
        MakeTr(tr, drivers[i].car.model);
        MakeTr(tr, drivers[i].car.year);
    });
}

window.onload = function() {
    addRow(drivers)
};