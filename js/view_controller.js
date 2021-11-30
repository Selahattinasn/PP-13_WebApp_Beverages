
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: check!
	Check Daten :: check!
    Btn. Trigger :: check!
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
// controller();
function controller() {
    output(updateImg(checkAge(getInput())));
}

// Trigger - BtnClick 
const btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick);

// Trigger - Input
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isInputValid);

// Event-Dispatcher
function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
        output("Input nicht korrekt!");
    }
}

function isInputValid() {

    let inputStr = field.value
    let patt = /^[0-9]{1,3}$/g; 
    let cond = patt.test(inputStr);

    if (!cond) {  // Fehlerbehandlung
       field.value = "";
       updateImg(data.default.bev);
    }

    return cond;
}

//4. Modul: Eingabe
function getInput() {
   return parseInt(field.value); 
}

//3. Modul: Business-Logic (Mapping) | Test:
// output(checkAge(2));
// output(checkAge(7));
// output(checkAge(13));
// output(checkAge(18));
// output(checkAge(99));
// output(checkAge(135));
function checkAge(age) {
    switch (true) {
        case (age >= data.milk.lower) && (age <= data.milk.upper) :
            return data.milk.bev;
        case (age >= data.juice.lower) && (age <= data.juice.upper):
            return data.juice.bev;
        case (age >= data.cola.lower) && (age <= data.cola.upper):
            return data.cola.bev;
        case (age >= data.wine.lower) && (age <= data.wine.upper):
            return data.wine.bev;
        default:
            return data.default.bev;
    }
}

//1. Modul: Bild aktualisieren | Test:
// output(updateImg("cola"));
// output(updateImg("milch"));
// output(updateImg("wein"));
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName // Monitoring
}

//1. Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}