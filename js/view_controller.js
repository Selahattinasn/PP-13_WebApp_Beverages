
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite :: check!
	Check Daten :: check!
    Btn. Trigger :: check!
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

/***  Ablaufsteuerung | Control */  

// 5. Modul Ablaufsteuerung | Test:
// controller();
function controller() {
    output(updateImg(checkAge(getInput())));
}

// 5c. Trigger - BtnClick 
const btn = document.getElementById("trigBtn");
btn.addEventListener("click",actOnClick);

// 5b. Event-Dispatcher
function actOnClick() {
    if (isInputValid()) {
        controller();
    } else {
        output("Input nicht korrekt!");
    }
}

/***  Eingabe | Check auf Datenintegrität */  

//4. Modul: Eingabe
function getInput() {
   return parseInt(field.value); 
}

//4a.  Modul: Check auf korrekte Eingaben ...
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

// 4c. Trigger - Input
const field = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isInputValid);


/***  Business-Logic */ 

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

/*** View-Schicht aktualisieren */ 

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