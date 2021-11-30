
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite ::
	Check Daten ::
    Btn. Trigger ::
    Business-Logic (Alter --> Getränk) :: check!
    Bild austauschen :: check!
*/

// Modul Ablaufsteuerung | Test:
// controller();
function controller() {
    output(updateImg(checkAge(getInput())));
}

function getInput() {
   return 4; 
}

//Modul: Business-Logic (Mapping) | Test:
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

// Modul: Bild aktualisieren | Test:
// output(updateImg("cola"));
// output(updateImg("milch"));
// output(updateImg("wein"));
function updateImg(imgName) {
    const img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName // Monitoring
}

//Modul: Konsolenausgabe --> Test:
function output(outputData) {
    console.log(outputData);
}