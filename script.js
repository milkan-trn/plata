//Iznos bruto plate
//#e6e6e6
function changeInputColor () {
let selectInput = document.querySelectorAll('[readonly]');
for (let i=0; i < selectInput.length; i++) {
    selectInput[i].style.background = "#e6e6e6";
  
    }
}

function  spanColor () {
    let spanC = document.querySelectorAll("span");
    for (let i=0; i< spanC.length; i++) {
        spanC[i].style.background = "#e6e6e6";
    }
}

function roundTo(n, digits) {
    if (digits === undefined) {
        digits = 0;
      }

  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  var test =(Math.round(n) / multiplicator);
  return +(test.toFixed(digits));
}
window.onload = function(){ 
    changeInputColor();
    spanColor ();
    }
function preracunaj01 () {
    let np = roundTo(document.querySelector("#NetoPlata").value, 2); //number
    let po = document.querySelector("#Porez");
    let mn = parseFloat(document.querySelector("#LicniOdbitak").value); //number
    let ppo = document.querySelector("#PlataPrijeOp");
    let pio = document.querySelector("#DoprinosPIO");
    let d185 = document.querySelector("#d185").value;
    let DoprinosZdravstvo = document.querySelector("#DoprinosZdravstvo");
    let d120 = document.querySelector("#d120").value;
    let DoprinosDZ = document.querySelector("#DoprinosDZ");
    let d170 = document.querySelector("#d170").value;
    let DoprinosN = document.querySelector("#DoprinosN");
    let d060 = document.querySelector("#d060").value;
    let DoprinosI = document.querySelector("#DoprinosI");
    let d010 = document.querySelector("#d010").value;
    let DoprinosS = document.querySelector("#DoprinosS");
    let d025 = document.querySelector("#d025").value;
    let uo = document.querySelector("#UkupneObaveze");
    let Prevoz = roundTo(document.querySelector("#Prevoz").value, 2);
    let Isplata = document.querySelector("#Isplata");
    let bp = document.querySelector("#BrutoPlata");
   
    let pov = ((np - mn)/9);
    
    
    if (pov <= 0) {
        pov = 0.00;
        // console.log("<0");
    }
    pov = parseFloat(pov);
    po.value = pov.toFixed(2);
    let ppov =(pov + np);
    ppo.value = ppov.toFixed(2);
    let bpv =  (ppov/((100 - d185 - d120 - d170 - d060)/100));
    bp.value = bpv.toFixed(2);
    pio.value = roundTo(bpv*(d185/100), 2 );
    DoprinosZdravstvo.value = roundTo(bpv*(d120/100), 2 );
    DoprinosDZ.value = roundTo(bpv*(d170/100), 2 );
    DoprinosN.value = roundTo(bpv*(d060/100), 2 );
    DoprinosI.value = roundTo(bpv*(d010/100), 2 );
    let dsv = np*(d025/100);
    DoprinosS.value = dsv.toFixed(2);
    // dp.value = (bpv - ppov).toFixed(2);
    uo.value = (bpv - np).toFixed(2);
    Isplata.value = (np - dsv + Prevoz).toFixed(2);

    netoPlata = true;
}

function preracunaj02 () {
    let NetoPlata = document.querySelector("#NetoPlata"); //number
    let po = document.querySelector("#Porez");
    let mn = parseFloat(document.querySelector("#LicniOdbitak").value); //number
    let ppo = document.querySelector("#PlataPrijeOp");
    let pio = document.querySelector("#DoprinosPIO");
    let d185 = document.querySelector("#d185").value;
    let DoprinosZdravstvo = document.querySelector("#DoprinosZdravstvo");
    let d120 = document.querySelector("#d120").value;
    let DoprinosDZ = document.querySelector("#DoprinosDZ");
    let d170 = document.querySelector("#d170").value;
    let DoprinosN = document.querySelector("#DoprinosN");
    let d060 = document.querySelector("#d060").value;
    let DoprinosI = document.querySelector("#DoprinosI");
    let d010 = document.querySelector("#d010").value;
    let DoprinosS = document.querySelector("#DoprinosS");
    let d025 = document.querySelector("#d025").value;
    let uo = document.querySelector("#UkupneObaveze");
    let Prevoz = roundTo(document.querySelector("#Prevoz").value, 2);
    let Isplata = document.querySelector("#Isplata");
    let bp = document.querySelector("#BrutoPlata");


    let bpv = bp.value;
    let ppov =  bp.value*((100 - d185 - d120 - d170 - d060)/100);
    ppo.value = ppov.toFixed(2);
    let pov = (ppov - mn)/10;
    if (pov < 0) {
        pov = 0.00;
        // console.log("<0");
    }
    po.value = pov.toFixed(2);
    let np = ppov - pov;
    NetoPlata.value = np.toFixed(2);
    pio.value = roundTo(bpv*(d185/100), 2 );
    DoprinosZdravstvo.value = roundTo(bpv*(d120/100), 2 );
    DoprinosDZ.value = roundTo(bpv*(d170/100), 2 );
    DoprinosN.value = roundTo(bpv*(d060/100), 2 );
    DoprinosI.value = roundTo(bpv*(d010/100), 2 );
    let dsv = np*(d025/100);
    DoprinosS.value = roundTo(dsv, 2);
    // dp.value = (bpv - ppov).toFixed(2);
    uo.value = (bpv - np).toFixed(2);
    Isplata.value = (np - dsv + Prevoz).toFixed(2);
    netoPlata = false;
}
function DoprinosiKeyUp () {
    if (netoPlata) {preracunaj01 ();} else { preracunaj02 ();}
    }

 
document.querySelector("#NetoPlata").addEventListener("keyup", function () {
    preracunaj01(); 
    } , false);
    document.querySelector("#BrutoPlata").addEventListener("keyup", function () {
        preracunaj02(); 
        } , false);
    // document.querySelector("#LicniOdbitak").addEventListener("keyup", function () {
    //     DoprinosiKeyUp ();  
    
    // } , false);
    // document.querySelector("#Prevoz").addEventListener("keyup", function () {
    //     DoprinosiKeyUp ();  
    
    // } , false);

    function recalculateInputes (x) {
            
        document.getElementById(x).addEventListener("keyup", function () {
            DoprinosiKeyUp ();  
        
        } , false);
    }

    
//On click select

document.addEventListener('click', function (event) {


    var x = event.target;
    if (event.target.tagName == "INPUT") {
    x.select();}

    }, false);

//On keyup recalculate

    document.addEventListener('keyup', function (event) {

        var x = event.target;
        if (event.target.tagName == "INPUT") {
            let idValue = x.getAttribute("id")
        recalculateInputes(idValue);}
    
        }, false);