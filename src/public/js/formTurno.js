console.log("Estoy en el formulario")

// SIMPLIFICACION de codigo
const log = console.log
const q = document.querySelector.bind(document)

const selectesp = q('.especialidad')
log(selectesp)

// URL del dominio
const URL='http://localhost:4000'

selectesp.onclick = function(){

    var selectorDoctor =  q('.doctor');
    //Borra todo tus options
    while (selectorDoctor.hasChildNodes()) {
        selectorDoctor.removeChild(selectorDoctor.firstChild);
    }

    const esp = selectesp.value
    if (esp != ''){
        log("ingresaste un campo valido")
        log("Se buscara doctores con esta especialidad")

        
        fetch(URL + '/doctors/esp/'+ esp)
        .then(function(response) {
            return response.json()
        })
        .then(function(information) {
            log(information.data)
            information.data.forEach(function(elem) {
                var optionDoctor = document.createElement('option');
                optionDoctor.innerText = elem.name ;
                optionDoctor.setAttribute('value',elem._id);
                selectorDoctor.append(optionDoctor);
              });
        })
        .catch(function(error){
            console.log(error);
        })
        
    }
    else{
        log("[rojito] Elige una especialidad")
        var optionDoctor = document.createElement('option');
        optionDoctor.innerText="Elige Primero la especialidad";
        selectorDoctor.append(optionDoctor);
    }

}