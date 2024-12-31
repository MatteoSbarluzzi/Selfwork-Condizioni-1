//Risoluzione else if

let v = 26;

if (v < 18){
    console.log('Insufficiente');
}else if(v >= 18 && v < 21){
    console.log('Sufficiente');
}else if(v >= 21 && v < 24){
    console.log('Buono');
}else if(v >= 24 && v < 27){
    console.log('Distinto');
}else if(v >= 27 && v < 29){
    console.log('Ottimo');
}else if(v === 30){
    console.log('Eccellente');
}else{
    console.log('Volore non valido');
}


//Risoluzione switch

let V = 20;

switch(true){
    case V < 18:
        console.log('Insufficiente');
        break;
    case V >= 18 && V < 21:
        console.log('Sufficiente');
        break;
    case V >= 21 && V < 24:
        console.log('Buono');
        break;
    case V >= 24 && V < 27:
        console.log('Distinto');
        break;
    case V >= 27 && V <= 29:
        console.log('Ottimo');
        break;
    case V === 30:
        console.log('Eccellente');
        break;
    default:
        console.log('Valore non valido');
}

  