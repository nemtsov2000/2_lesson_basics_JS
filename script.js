import drivers from './motorists.json' assert { type: 'json' } ;

function makeTr(tr, text, id) {
    const td = document.createElement("td");
    td.innerText = text;
    if (id) td.id = id;
    tr.append(td);

}

function makeDivColor(driverCarColor) {
    const td = document.getElementById("color");
    const divColor = document.createElement("div");
    divColor.className = "div-color";
    divColor.style.backgroundColor = driverCarColor;
    td.append(divColor);
}

function makeInputCheckbox(driverCarIsConvertible) {
    const td = document.getElementById("isConvertible");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "inputCheckbox";
    inputCheckbox.checked = driverCarIsConvertible;
    inputCheckbox.setAttribute("readonly", "read");
    inputCheckbox.onkeydown = () => false;
    td.append(inputCheckbox);
}

function onClickEvent(index) {
    document.getElementById('block-full').style.display = "block";
    const driver = drivers[index];
    if (!document.getElementById("trFull")) {
        const tbodyFull = document.getElementById("tbodyFull");
        const trFull = document.createElement("tr");
        trFull.id = "trFull";
        tbodyFull.append(trFull);
        makeTr(trFull, driver.person.lastname, "lastname");
        makeTr(trFull, driver.person.firstname, "firstname")
        makeTr(trFull, driver.car.manufacturer, "manufacturer");
        makeTr(trFull, driver.car.model, "model");
        makeTr(trFull, driver.car.year, "year");
        makeTr(trFull, driver.car.type, "type");
        makeTr(trFull, driver.car.color, "color");
        makeDivColor(driver.car.color);
        makeTr(trFull, '', "isConvertible");
        makeInputCheckbox(driver.car.isConvertible);
        makeTr(trFull, driver.car.vin, "vin");
    } else  {
        document.getElementById("lastname").innerText = driver.person.lastname;
        document.getElementById("firstname").innerText = driver.person.firstname;
        document.getElementById("manufacturer").innerText = driver.car.manufacturer;
        document.getElementById("model").innerText = driver.car.model;
        document.getElementById("year").innerText = driver.car.year;
        document.getElementById("type").innerText = driver.car.type;
        document.getElementById("color").innerText = driver.car.color;
        makeDivColor(driver.car.color);
        document.getElementById("inputCheckbox").checked = driver.car.isConvertible;
        document.getElementById("vin").innerText = driver.car.vin;
    }
}

function addRows(drivers) {
    const tbodyShort = document.getElementById('tbodyShort');
    drivers.forEach((item, index) => {
        const tr = document.createElement('tr');
        tr.id = index;
        tr.onclick = () => onClickEvent(index);
        tr.className = "pointer";
        tbodyShort.append(tr);
        makeTr(tr, item.person.lastname);
        makeTr(tr, item.person.firstname)
        makeTr(tr, item.car.manufacturer);
        makeTr(tr, item.car.model);
        makeTr(tr, item.car.year);
    });
}

window.onload = () => addRows(drivers);