//Validar
function validar(){
    var form =document.form;

    if(form.Nombre.value==0){
        alert("El campo nombre esta vacio");
        form.Nombre.value="";
        form.Nombre.focus();
        return false;
    }

    if(form.Correo_Electronico.value==0){
        alert("El campo email esta vacio");
        form.Correo_electronico.value="";
        form.Correo_electronico.focus();
        return false;
    }

    if(form.Telefono.value==0){
        alert("El campo Telefono esta vacio");
        form.Telefono.value="";
        form.Telefono.focus();
        return false;
    }

     //Mensaje
    if (form.mensaje.value.length >500){
        alert('Texto demasiado largo, deben ser menos a 500 caracteres');    
    } 

    form.submit;
}

//Caracteres
function contarcaracteres(){
	var total=500;

    setTimeout(function(){
    var valor=document.getElementById('mensaje');
    var respuesta=document.getElementById('contador');
    var cantidad=valor.value.length;
    document.getElementById('contador').innerHTML = cantidad + ' caracteres, te quedan ' + (total - cantidad) ;
    if(cantidad>total){
        respuesta.style.color = "red";
    }
    else {
        respuesta.style.color = "white";
    }
    },10);

}

//Edad
function validaedad (fecha) {
    var fechaActual = new Date();
    var dia_act = parseInt(fechaActual.getDate());
    var mes_act = parseInt(fechaActual.getMonth()) + 1;
    var anio_act = parseInt(fechaActual.getFullYear());
    
    var dia_naci = parseInt(String(fecha).substring(8,10));
    var mes_naci = parseInt(String(fecha).substring(5,7));
    var anio_naci = parseInt(String(fecha).substring(0,4));
    
    var edad = anio_act - anio_naci;
    if (mes_act< mes_naci){
        edad--;
    } else if(mes_act === mes_naci){
        if(dia_act< dia_naci){
            edad--;
        }
    }
     
    if(edad <18){
        alert ('Usted tiene ' + edad + ' años, es menor y no puede trabajar en esta empresa. \nLo sentimos');
 
    }  
}

